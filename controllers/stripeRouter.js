const stripeRouter = require("express").Router();
const { hasValidToken } = require("../utils/middleware");
const {
  STRIPE_SECRET,
} = require("../utils/config");
const stripe = require("stripe")(STRIPE_SECRET);
const Order = require("../models/order");
const { broadcast } = require("../controllers/subscribe");
const formValidator = require("../utils/formValidator.js");
const { RateLimiterMemory } = require("rate-limiter-flexible");
const getWords = require("../utils/words.js");
const { updateInventoryItems, enrichOrder } = require(
  "./ordersUtils.js",
);
const { orderTemplate, orderTemplateText } = require("../templates/order.js");
const transporter = require("./mailer.js");

const opts = {
  points: 6,
  duration: 5,
};

const rateLimiter = new RateLimiterMemory(opts);

stripeRouter.all("/", (req, res, next) => {
  rateLimiter
    .consume(req.ip)
    .then(() => next())
    .catch(() => res.status(400).json({ error: "Too many requests" }));
});

async function handleStripePayment({ order, res }) {
  const paymentDetails = {
    amount: Math.round(order.total * 100), // stripe expects a total they can divide by 100
    currency: order.address.country === "Canada" ? "cad" : "usd",
  };

  // If updating a paymentIntent
  if (order.orderId) {
    const orderToUpdate = await Order.findOneAndUpdate(
      { orderId: order.orderId },
      order,
      (error) => error && res.status(400).json({ error: error.message }),
    );
    if (!orderToUpdate) {
      return res.status(400).json({ error: "Payment intent not found" });
    }

    try {
      await stripe.paymentIntents.update(orderDetails.orderId, paymentDetails);
      return res.json(orderToUpdate);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Else create a new paymentIntent
  const paymentIntent = await stripe.paymentIntents.create(paymentDetails);

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
    orderId: paymentIntent.id,
    identifier,
  });

  try {
    // Save new order
    await newOrder.save();
    // Notify dashboard of pending order
    broadcast(
      JSON.stringify({
        type: "pending order",
        data: { name: newOrder.name, orderId: newOrder.orderId },
      }),
    );
    return res.json({
      orderData: newOrder,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
}

// Update order post-payment
stripeRouter.post("/post-payment-webhook", async (req, res) => {
  const event = req.body;
  const id = event.data.object.id;
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
    await transporter.sendMail({
      from: "Zircus <no.reply@zircus.ca>",
      to: orderToUpdate.email,
      subject: orderToUpdate.lang === "fr" ? "Votre order" : "Your order",
      text: orderTemplateText(orderToUpdate),
      html: orderTemplate(orderToUpdate),
    });
    if (inventoryUpdateError) {
      return res.status(400).json({ error: inventoryUpdateError });
    }
    return res.json({ order: orderToUpdate, status: "COMPLETED" });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});

/* stripeRouter.get('/:id', async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (!order) return res.status(404).json({ error: 'Order not found' })
    return res.send(orderTemplate(order))
}) */

stripeRouter.post("/create-payment-intent", async (req, res) => {
  let formData;
  try {
    formData = formValidator(req.body);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  // Calculate the total for the order
  const { error, order } = await enrichOrder(
    formData,
  );
  if (error) {
    return res.status(400).json({ error });
  }

  // orderDetails for creating a pending order
  return handleStripePayment({
    order,
    res,
  });
});

stripeRouter.post("/cancel-payment-intent/:id", async (req, res) => {
  const { orderId } = req.body;

  try {
    await Order.findOneAndDelete(
      { orderId, _id: req.params.id, hasPaid: false },
      null,
      (error, _) => {
        if (error) {
          return res.status(400).json({ error: error.message });
        }
      },
    );
    const result = await stripe.paymentIntents.cancel(orderId);
    broadcast(
      JSON.stringify({
        type: "deleted order",
        data: { response: `Canceled pending order ${orderId}` },
      }),
    );
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

stripeRouter.put("/:id", async (req, res) => {
  if (!hasValidToken(req.token)) {
    return res.status(401).json({ error: "Token missing or invalid" });
  }

  // Requires a json object { updatedAttributes: { ... } }
  await Order.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body.updatedAttributes,
    },
    (err, doc) => {
      if (err) return res.status(500).json({ error: e.message });
      return res.json(doc);
    },
  );
});

module.exports = stripeRouter;
