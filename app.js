const express = require("express");
const helmet = require("helmet");
const app = express();
const cors = require("cors");
const middleware = require("./utils/middleware");
require("express-async-errors");

// Routers
const invRouter = require("./controllers/inv");
const loginRouter = require("./controllers/login");
const ordersRouter = require("./controllers/orders");
const stripeRouter = require("./controllers/stripeRouter.js");
const paypalRouter = require("./controllers/paypalRouter.js");
const tagLinesRouter = require("./controllers/tagline");
const adminRouter = require("./controllers/admin");
const messageRouter = require("./controllers/message");

// Use cors and json
app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());
app.use(express.static("admin/build"));

// Use custom middleware to extra jwt and log reqs
app.use(middleware.tokenExtractor);
app.use(middleware.requestLogger);

// Api Endpoints
app.use("/api/login", loginRouter);
app.use("/admin", adminRouter);
app.use("/api/inv", invRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/stripe", stripeRouter);
app.use("/api/paypal", paypalRouter);
app.use("/api/taglines", tagLinesRouter);
app.use("/api/message", messageRouter);

// Finally unknownEndpoint middleware and errorHandler
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
