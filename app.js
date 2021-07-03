const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const config = require("./utils/config")
const logger = require("./utils/logger")
const middleware = require("./utils/middleware")
require("express-async-errors")

// Routers
const invRouter = require("./controllers/inv")
const loginRouter = require('./controllers/login')
const ordersRouter = require('./controllers/orders')
const usersRouter = require('./controllers/users')
const { countriesRouter } = require('./controllers/countries')

// Start logging and connect to Database
logger.info("connecting to ", config.MONGODB_URI)
mongoose
    .connect(config.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        logger.info("connected to Database")
    })
    .catch((e) => logger.error("error connecting to Database: ", e.message))


// Use cors and json
app.use(cors())
app.use(express.json())
app.use(express.static('build'))

// Use custom middleware to extra jwt and log reqs
app.use(middleware.tokenExtractor)
app.use(middleware.requestLogger)

// Api Endpoints
app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)
app.use('/api/inv', invRouter)
app.use('/api/orders', ordersRouter)
app.use('/api/countries', countriesRouter)

// Finally unknownEndpoint middleware and errorHandler
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
