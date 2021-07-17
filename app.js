const express = require('express')
const helmet = require('helmet')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
require('express-async-errors')

// Routers
const invRouter = require('./controllers/inv')
const loginRouter = require('./controllers/login')
const ordersRouter = require('./controllers/orders')
const tagLinesRouter = require('./controllers/tagline')
const adminRouter = require('./controllers/admin')

// Start logging and connect to Database
logger.info('connecting to ', config.MONGODB_URI)
const connect = async () =>
    await mongoose
        .connect(config.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            logger.info('connected to Database')
        })
        .catch(e => logger.error('error connecting to Database: ', e.message))
connect()

// Use cors and json
app.use(cors())
app.use(helmet({ contentSecurityPolicy: false }))
app.use(express.json())
app.use(express.static('admin/build'))

// Use custom middleware to extra jwt and log reqs
app.use(middleware.tokenExtractor)
app.use(middleware.requestLogger)

// Api Endpoints
app.use('/api/login', loginRouter)
app.use('/admin', adminRouter)
app.use('/api/inv', invRouter)
app.use('/api/orders', ordersRouter)
app.use('/api/taglines', tagLinesRouter)

// Finally unknownEndpoint middleware and errorHandler
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
