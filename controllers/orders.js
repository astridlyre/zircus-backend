const ordersRouter = require("express").Router();
const { hasValidToken } = require("../utils/middleware");
const Order = require("../models/order");
const Underwear = require("../models/underwear");
// const { orderTemplate, orderTemplateText } = require('../templates/order')
const { broadcast } = require("../controllers/subscribe");
const { RateLimiterMemory } = require("rate-limiter-flexible");
const { getRate, getArtifact } = require("../xml/cp.js");

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

ordersRouter.post("/shipping", async (req, res) => {
  try {
    const quotes = await getRate(req.body);
    return res.json(quotes);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

ordersRouter.post("/label", async (req, res) => {
  if (!hasValidToken(req.token)) {
    return res.status(500).json({ error: "Invalid token" });
  }
  try {
    const file = await getArtifact(req.body.url);
    return res.type("applicaton/pdf").send(Buffer.from(file));
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

ordersRouter.post("/:orderId", async (req, res) => {
  const { identifier, email } = req.body;

  try {
    const order = await Order.findOne({ orderId: req.params.orderId });
    if (order.identifier === identifier && order.email === email) {
      return res.json(order);
    } else {
      return res.status(404).json({ error: "No orders found" });
    }
  } catch (_) {
    return res.status(404).json({ error: "No orders found" });
  }
});

ordersRouter.get("/", async (req, res) => {
  if (!hasValidToken(req.token)) {
    return res.status(401).json({ error: "Token missing or invalid" });
  }

  const order = await Order.find({});
  return order.length > 0
    ? res.json(order)
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
