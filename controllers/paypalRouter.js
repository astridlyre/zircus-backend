const paypalRouter = require("express").Router();
const { updateInventoryItems, calculateOrderAmount } = require(
  "./ordersUtils.js",
);
const Order = require("../models/order");
const { broadcast } = require("../controllers/subscribe");
const formValidator = require("../utils/formValidator.js");
const { RateLimiterMemory } = require("rate-limiter-flexible");

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

async function handlePaypalPayment({ orderDetails, amount, res }) {
  if (orderDetails.total !== Number(amount.value)) {
    return res.status(400).json({
      error: `Totals do not match: ${orderDetails.total} vs ${amount.value}`,
    });
  }

  // Create a new pending order
  const newOrder = new Order(orderDetails);
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
    return res.json(newOrder);
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
}

paypalRouter.post("/validate-price", async (req, res) => {
  let formData;
  try {
    formData = formValidator(req.body);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  const { items, address, shippingMethod } = formData;

  const { total, calculateTotalError } = await calculateOrderAmount({
    items,
    address,
    shippingMethod,
  });

  if (calculateTotalError) {
    return res.status(400).json({ error: calculateTotalError });
  }
  return res.json({ amount: { value: total.toFixed(2) } });
});

// Update order post-payment
paypalRouter.post("/", async (req, res) => {
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

paypalRouter.post("/create-payment-intent", async (req, res) => {
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

  return handlePaypalPayment({ orderDetails, res, amount });
});

module.exports = paypalRouter;
