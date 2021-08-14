const ordersRouter = require("express").Router();
const { hasValidToken } = require("../utils/middleware");
const Order = require("../models/order");
const Underwear = require("../models/underwear");
// const { orderTemplate, orderTemplateText } = require('../templates/order')
const { broadcast } = require("../controllers/subscribe");
const { RateLimiterMemory } = require("rate-limiter-flexible");

const opts = {
  points: 6,
  duration: 5,
};

const rateLimiter = new RateLimiterMemory(opts);

ordersRouter.all("/", (req, res, next) => {
  rateLimiter
    .consume(req.ip)
    .then(() => next())
    .catch(() => res.status(400).json({ error: "Too many requests" }));
});

ordersRouter.get("/", async (req, res) => {
  if (!hasValidToken(req.token)) {
    return res.status(401).json({ error: "Token missing or invalid" });
  }

  const orders = await Order.find({});
  return orders.length > 0
    ? res.json(orders)
    : res.status(404).json({ error: "No orders found" });
});

ordersRouter.put("/:id", async (req, res) => {
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

ordersRouter.delete("/:id", async (req, res) => {
  if (!hasValidToken(req.token)) {
    return res.status(401).json({ error: "Token missing or invalid" });
  }

  const order = await Order.findById(req.params.id);
  if (!order) return res.json({ error: "Order not found" });

  // Re-add order items to inv stock
  for await (const item of order.items) {
    const itemToUpdate = await Underwear.findOne({ type: item.type });
    itemToUpdate.quantity += item.quantity;
    try {
      await itemToUpdate.save();
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  try {
    await Order.findByIdAndDelete(req.params.id, (err) => {
      if (err) return res.json({ error: err });
      broadcast(
        JSON.stringify({
          type: "deleted order",
          data: { response: "Item deleted" },
        }),
      );
      return res.json({ response: "Item deleted" });
    });
  } catch (e) {
    return res.json({ error: e.message });
  }
});

module.exports = ordersRouter;
