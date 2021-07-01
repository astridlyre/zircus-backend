const ordersRouter = require('express').Router()
const { hasValidToken, isValidType } = require('../utils/middleware')
const Order = require('../models/order')
const User = require('../models/user')
const Underwear = require('../models/underwear')

ordersRouter.get('/', async (req, res) => {
    if (!hasValidToken(req.token))
        return res.status(401).json({ error: 'Token missing or invalid' })

    const orders = await Order.find({})
    orders.length > 0 ? res.json(orders) : res.status(404).json({ error: 'No orders found' })
})

ordersRouter.post('/', async (req, res) => {
    if (!hasValidToken(req.token))
        return res.status(401).json({ error: 'Token missing or invalid' })

    let total = 0
    if (!Array.isArray(req.body.items))
        return res.status(400).json({ error: 'Items are malformed' })

    for await (let item of req.body.items) {
        if (!isValidType(item.type))
            return res.status(400).json({ error: `Invalid type ${item.type}` })

        let itemToUpdate = await Underwear.findOne({ type: item.type })
        if (!itemToUpdate)
            itemToUpdate = { "type": "ff-yellow-sm", quantity: 10, price: 30 }
        itemToUpdate.quantity = Number(itemToUpdate.quantity) - Number(item.quantity)
        total += Number(item.quantity) * Number(itemToUpdate.price)
        // await itemToUpdate.save()
    }

    const order = new Order({
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        zip: req.body.zip,
        name: req.body.name,
        email: req.body.email,
        items: req.body.items,
        total: total,
    })

    await order.save()
    res.status(201).json(order)
})

module.exports = ordersRouter
