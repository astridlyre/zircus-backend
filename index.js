const app = require("./app");
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");
const WebSocket = require("ws");
const { push, filter } = require("./controllers/subscribe");

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  push(ws);
  ws.on("message", (m) => console.log("received: ", m));
  ws.on("close", () => filter(ws));
});

server.listen(config.PORT, () => {
  logger.info(`Server is running on port ${config.PORT}`);
});

module.exports = wss;
