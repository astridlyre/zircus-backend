const paypalRouter = require("express").Router();
const { updateInventoryItems, calculateOrderAmount } = require(
  "./ordersUtils.js",
);
const Order = require("../models/order");
const { broadcast } = require("../controllers/subscribe");
const formValidator = require("../utils/formValidator.js");
const { RateLimiterMemory } = require("rate-limiter-flexible");
const url = require("url");
const axios = require("axios");
const { PAYPAL_SECRET, PAYPAL_CLIENTID } = require("../utils/config.js");

const PAYPAL_TOKEN_URL = "https://api-m.sandbox.paypal.com/v1/oauth2/token";
const PAYPAL_ORDER_URL = "https://api-m.sandbox.paypal.com/v2/checkout/orders";

let creds = {};

async function updateToken() {
  const params = new url.URLSearchParams({ grant_type: "client_credentials" });
  return await axios.post(PAYPAL_TOKEN_URL, params.toString(), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json",
    },
    auth: {
      username: PAYPAL_CLIENTID,
      password: PAYPAL_SECRET,
    },
  }).then((res) => {
    console.log(res.access_token);
    return {
      token: res.data.access_token,
      expires: res.data.expires_in * 1000 + Date.now(),
    };
  })
    .catch((error) => console.error(`${error.message}`));
}

const opts = {
  points: 6,
  duration: 5,
};

const rateLimiter = new RateLimiterMemory(opts);

paypalRouter.all("/", (req, res, next) => {
  rateLimiter
    .consume(req.ip)
    .then(() => next())
    .catch(() => res.status(400).json({ error: "Too many requests" }));
});

function createPayPalRequest({ address, total }) {
  const currency_code = address.country === "Canada" ? "CAD" : "USD";
  const value = total.toFixed(2);
  return {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code,
          value,
        },
        description: "Zircus Underwear - Handmade on Vancouver Island",
      },
    ],
    application_context: {
      brand_name: "Zircus · Underwear",
    },
  };
}

async function handlePaypalPayment({ order, res }) {
  if (!creds.token || creds.expires && creds.expires < Date.now()) {
    creds = await updateToken();
    console.log("updated cred: ", creds);
  }

  const reply = await axios.post(
    PAYPAL_ORDER_URL,
    createPayPalRequest(order),
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${creds.token}`,
      },
    },
  ).catch((error) => console.log(error));

  if (!reply || !reply.data) {
    return res.status(400).json({ error: `Error creating orderId` });
  }
  const orderId = reply.data.id;

  // Create a new pending order
  const newOrder = new Order({
    ...order,
    orderId,
  });
  try {
    // Save new order
    await newOrder.save();
    // Notify dashboard of pending order
    broadcast(
      JSON.stringify({
        type: "pending order",
        data: { name: newOrder.name, orderId },
      }),
    );
    return res.json(newOrder);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

// Update order post-payment
paypalRouter.post("/post-payment-wehook", async (req, res) => {
  const event = req.body;
  if (event.event_type !== "PAYMENT.CAPTURE.COMPLETED") {
    return res.status(400).json({ error: "Expected completed payment" });
  }

  const id = event.resource.supplementary_data.related_ids.order_id;
  const orderToUpdate = await Order.findOne({ orderId: id });
  if (!orderToUpdate) {
    return res.status(400).json({ error: "Invalid order id" });
  }

  // Set paid to true
  orderToUpdate.hasPaid = true;

  // Update inventory
  const { inventoryUpdateError } = await updateInventoryItems(
    orderToUpdate.items,
  );

  try {
    await orderToUpdate.save();
    broadcast(
      JSON.stringify({
        type: "paid order",
        data: { name: orderToUpdate.name },
      }),
    );
    /* const info = await transporter.sendMail({
            from: 'Zircus <erin.danger.burton@gmail.com>',
            to: orderToUpdate.email,
            subject: orderToUpdate.lang === 'fr' ? 'Votre order' : 'Your order',
            text: orderTemplateText(orderToUpdate),
            html: orderTemplate(orderToUpdate),
        }) */
    if (inventoryUpdateError) {
      return res.status(400).json({ error: inventoryUpdateError });
    }
    return res.json({ order: orderToUpdate, status: "COMPLETED" });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});

paypalRouter.post("/create-payment-intent", async (req, res) => {
  let formData;
  try {
    formData = formValidator(req.body);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  // Calculate the total for the order
  const { error, order } = await calculateOrderAmount(
    formData,
  );
  if (error) {
    return res.status(400).json({ error });
  }

  // orderDetails for creating a pending order
  return handlePaypalPayment({ order, res });
});

paypalRouter.post("/cancel-payment-intent/:id", async (req, res) => {
  const { orderId } = req.body;

  try {
    await Order.findOneAndDelete(
      {
        id: req.params.id,
        orderId,
        hasPaid: false,
      },
      null,
      (error, _) => {
        if (error) {
          return res.status(400).json({ error });
        }
        broadcast(
          JSON.stringify({
            type: "deleted order",
            data: { response: "Canceled pending order" },
          }),
        );
        return res.json({ response: "canceled" });
      },
    );
  } catch (e) {
    return res.json({ error: e.message });
  }
});

module.exports = paypalRouter;
