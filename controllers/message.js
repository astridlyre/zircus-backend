const messageRouter = require("express").Router();
const Message = require("../models/message");
const { hasValidToken } = require("../utils/middleware.js");
const { RateLimiterMemory } = require("rate-limiter-flexible");
const { broadcast } = require("./subscribe");
const formValidator = require("../utils/formValidator.js");

const opts = {
  points: 6,
  duration: 10,
};

const rateLimiter = new RateLimiterMemory(opts);

messageRouter.all("/", (req, res, next) => {
  rateLimiter
    .consume(req.ip)
    .then(() => next())
    .catch(() => res.status(400).json({ error: "Too many requests" }));
});

messageRouter.post("/", async (req, res) => {
  let formData;
  try {
    formData = formValidator(req.body);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  if (formData.message.length > 500) {
    return res.status(400).json({
      error: `Message is too long: ${formData.message.length} > 500 characters`,
    });
  }

  const msg = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };
  const newMessage = new Message(msg);

  broadcast(JSON.stringify({ type: "message", data: msg }));

  try {
    const savedEntry = await newMessage.save();
    res.status(201).json(savedEntry);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

messageRouter.get("/", async (req, res) => {
  if (!hasValidToken(req.token)) {
    return res.status(500).json({ error: "Token missing or invalid" });
  }
  const messages = await Message.find({});
  if (!messages) return res.json({ error: "No messages" });
  return res.json({ messages: messages });
});

messageRouter.delete("/:id", async (req, res) => {
  if (!hasValidToken(req.token)) {
    return res.status(500).json({ error: "Token missing or invalid" });
  }

  Message.findByIdAndDelete(req.params.id, (err) => {
    if (err) res.json({ error: err.message });
    else res.json({ response: "Message deleted" });
  });
});

module.exports = messageRouter;
