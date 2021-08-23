const paypalRouter = require("express").Router();
const { updateInventoryItems, enrichOrder } = require(
  "./ordersUtils.js",
);
const Order = require("../models/order");
const { broadcast } = require("../controllers/subscribe");
const formValidator = require("../utils/formValidator.js");
const { RateLimiterMemory } = require("rate-limiter-flexible");
const url = require("url");
const axios = require("axios");
const { PAYPAL_SECRET, PAYPAL_CLIENTID } = require("../utils/config.js");
const getWords = require("../utils/words.js");
const { orderTemplate, orderTemplateText } = require("../templates/order.js");
const transporter = require("./mailer.js");
const { createShipment } = require("../xml/cp.js");

const PAYPAL_TOKEN_URL = "https://api-m.sandbox.paypal.com/v1/oauth2/token";
const PAYPAL_ORDER_URL = "https://api-m.sandbox.paypal.com/v2/checkout/orders";

let creds = {};

async function updateToken() {
  const params = new url.URLSearchParams({ grant_type: "client_credentials" });
  creds = await axios.post(PAYPAL_TOKEN_URL, params.toString(), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json",
    },
    auth: {
      username: PAYPAL_CLIENTID,
      password: PAYPAL_SECRET,
    },
  }).then((res) => {
    return {
      token: res.data.access_token,
      expires: res.data.expires_in * 1000 + Date.now(),
    };
  })
    .catch((error) => {
      console.error(`${error}`);
      return {
        token: null,
        expires: -1,
      };
    });
  return creds;
}

updateToken();

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
    if (!creds.token) {
      return res.status(400).json({ error: `Unable to authenticate` });
    }
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

  let identifier = null;
  while (identifier === null) {
    const words = getWords();
    const foundWord = await Order.findOne({ identifier: words });
    if (!foundWord) {
      identifier = words;
    }
  }

  // Create a new pending order
  const newOrder = new Order({
    ...order,
    orderId,
    identifier,
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
paypalRouter.post("/post-payment-webhook", async (req, res) => {
  const event = req.body;
  if (event.event_type !== "PAYMENT.CAPTURE.COMPLETED") {
    return res.status(400).json({ error: "Expected completed payment" });
  }

  const { id, status, supplementary_data } = event.resource;
  const orderId = supplementary_data.related_ids.order_id;

  if (status !== "COMPLETED") {
    return res.json({ error: "Expected completed payment" });
  }

  const orderToUpdate = await Order.findOne({ orderId });
  if (!orderToUpdate) {
    return res.status(400).json({ error: "Invalid order id" });
  }

  try {
    const shipment = await createShipment(orderToUpdate);
    orderToUpdate.shipping.shipment = shipment;
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  // Set paid to true
  orderToUpdate.hasPaid = true;
  orderToUpdate.capture = {
    status,
    id,
  };

  // Update inventory
  const { inventoryUpdateError } = await updateInventoryItems(
    orderToUpdate.items,
  );

  try {
    await orderToUpdate.save();
    await transporter.sendMail({
      from: "Zircus <no.reply@zircus.ca>",
      to: orderToUpdate.email,
      subject: orderToUpdate.lang === "fr" ? "Votre order" : "Your order",
      text: orderTemplateText(orderToUpdate),
      html: orderTemplate(orderToUpdate),
    });
    broadcast(
      JSON.stringify({
        type: "paid order",
        data: { name: orderToUpdate.name },
      }),
    );
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
  const { error, order } = await enrichOrder(formData);
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
        _id: req.params.id,
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
            data: { response: `Canceled pending order ${orderId}` },
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
