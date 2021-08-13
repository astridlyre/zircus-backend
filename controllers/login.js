const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/user");
const { RateLimiterMemory } = require("rate-limiter-flexible");

const opts = {
  points: 6,
  duration: 1,
};

const rateLimiter = new RateLimiterMemory(opts);

loginRouter.all("/", (req, res, next) => {
  rateLimiter
    .consume(req.ip)
    .then(() => next())
    .catch(() => res.status(400).json({ error: "Too many requests" }));
});

loginRouter.post("/", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(req.body.password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  res.status(200).send({
    token,
    username: user.username,
    id: user.id,
    name: user.name,
  });
});

module.exports = loginRouter;
