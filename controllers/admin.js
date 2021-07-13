const bcrypt = require('bcrypt')
const { hasValidToken } = require('../utils/middleware')
const adminRouter = require('express').Router()
const Underwear = require('../models/underwear')
const Order = require('../models/order')
const User = require('../models/user')

adminRouter.get('/', async (req, res) => {
    if (!hasValidToken) res.redirect('/login')

    res.sendFile('index.html', { root: 'admin' })
})

module.exports = adminRouter
