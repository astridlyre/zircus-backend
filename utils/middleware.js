const logger = require("./logger");
const jwt = require("jsonwebtoken");

const tokenExtractor = (req, res, next) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    req.token = authorization.substring(7);
    next();
  } else {
    req.token = null;
    next();
  }
};

const hasValidToken = (token) => {
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) return false;
  return true;
};

const validTypes = [];
for (const type of ["ff", "pf", "cf"]) {
  for (const color of ["yellow", "purple", "teal", "black", "stripe"]) {
    for (
      const size of [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
      ]
    ) {
      validTypes.push(`${type}-${color}-${size}`);
    }
  }
}

const isValidType = (type) => validTypes.find((t) => t === type) ? true : false;

const requestLogger = (req, res, next) => {
  logger.info("Method: ", req.method);
  logger.info("Path: ", req.path);
  logger.info("Body: ", req.body);
  logger.info("---");
  next();
};

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "Unknown Endpoint" });
};

const errorHandler = (error, req, res, next) => {
  if (error.name === "Cast Error") {
    return res.status(400).send({ error: "Invalid Id" });
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.messsage });
  } else if (error.name === "JsonWebTokenError") {
    return res.status(401).json({ error: "Invalid Token" });
  }
  logger.error(error.message);
  next(error);
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  tokenExtractor,
  hasValidToken,
  isValidType,
};
