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
const { updateInventoryItems, calculateOrderAmount } = require(
  "./ordersUtils.js",
);

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

async function handleStripePayment({ orderDetails, res }) {
  const paymentDetails = {
    amount: orderDetails.total * 100, // stripe expects a total they can divide by 100
    currency: orderDetails.address.country === "Canada" ? "cad" : "usd",
  };

  // If updating a paymentIntent
  if (orderDetails.orderId) {
    const orderToUpdate = await Order.findOneAndUpdate(
      { orderId: orderDetails.orderId },
      orderDetails,
      (e) => e && res.status(400).json({ error: e.message }),
    );
    if (!orderToUpdate) {
      return res.status(400).json({ error: "Payment intent not found" });
    }

    try {
      await stripe.paymentIntents.update(orderDetails.orderId, paymentDetails);
      return res.json(orderToUpdate);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }

  // Else create a new paymentIntent
  const paymentIntent = await stripe.paymentIntents.create(paymentDetails);

  // Create a new pending order
  const newOrder = new Order({
    ...orderDetails,
    orderId: paymentIntent.id,
  });

  try {
    // Save new order
    await newOrder.save();
    // Notify dashboard of pending order
    broadcast(
      JSON.stringify({
        type: "pending order",
        data: { name: orderDetails.name },
      }),
    );
    return res.json({
      order: newOrder,
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
  const { calculateTotalError, shipping, total } = await calculateOrderAmount(
    formData,
  );
  if (calculateTotalError) {
    return res.status(400).json({ error: calculateTotalError });
  }

  // orderDetails for creating a pending order
  const orderDetails = {
    ...formData,
    total,
    shipping,
  };

  return handleStripePayment({
    orderDetails,
    res,
  });
});

stripeRouter.post("/cancel-payment-intent", async (req, res) => {
  const { orderId } = req.body;

  try {
    const orderToDelete = await Order.findOne({ orderId });
    if (!orderToDelete) {
      return res
        .status(400)
        .json({ error: `Unable to find order for id: ${orderId}` });
    }
    const result = await stripe.paymentIntents.cancel(orderId);
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