const config = require("./utils/config");
const app = require("./app");
const mongoose = require("mongoose");
const logger = require("./utils/logger");
const http = require("http");
const WebSocket = require("ws");
const { push, filter } = require("./controllers/subscribe");
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", ws => {
  push(ws);
  ws.on("message", m => console.log("received: ", m));
  ws.on("close", () => filter(ws));
});

async function main() {
  // Start logging and connect to Database
  logger.info("connecting to ", config.MONGODB_URI);
  await mongoose
    .connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      logger.info("connected to Database");
      server.listen(config.PORT, () => {
        logger.info(`Server is running on port ${config.PORT}`);
      });
    })
    .catch(e => logger.error("error connecting to Database: ", e.message));
}

main();

module.exports = wss;
