const ordersRouter = require('express').Router()
const { hasValidToken, isValidType } = require('../utils/middleware')
const { STRIPE_SECRET, STRIPE_PUBLIC } = require('../utils/config')
const { countriesDB } = require('./countries')
const stripe = require('stripe')(STRIPE_SECRET)
const Order = require('../models/order')
const Underwear = require('../models/underwear')

let pendingOrders = []

const calculateOrderAmount = async (items, country, state) => {
    const inv = await Underwear.find({})
    // Update new inventory items and tally up price
    let total = 0
    for (const item of items) {
        // If it isn't valid, return error
        if (!isValidType(item.type))
            return { error: `Invalid type ${item.type}` }

        const invItem = inv.find(i => i.type === item.type)
        const newQuantity = invItem.quantity - Number(item.quantity)
        // Make sure there is enough stock
        if (newQuantity < 0) return { error: `Invalid item quantities` }

        total += Number(item.quantity) * Number(invItem.price)
    }

    let taxRate = 0
    if (country === 'Canada') {
        switch (state) {
            case 'New Brunswick':
            case 'Newfoundland and Labrador':
            case 'Nova Scotia':
            case 'Prince Edward Island':
                taxrate = 0.15
                break
            case 'Ontario':
                taxRate = 0.13
                break
            default:
                taxRate = 0.05
        }
    } else {
        taxRate = 0.07 // US Tax rate?
    }

    return { total: (total + total * taxRate) * 100 }
}

ordersRouter.get('/', async (req, res) => {
    if (!hasValidToken(req.token))
        return res.status(401).json({ error: 'Token missing or invalid' })

    const orders = await Order.find({})
    return orders.length > 0
        ? res.json(orders)
        : res.status(404).json({ error: 'No orders found' })
})

// Update order post-payment
ordersRouter.post('/', async (req, res) => {
    const id = req.body.id
    const orderToSave = pendingOrders.find(
        order => order.paymentIntent.id === id
    )
    if (!orderToSave) return res.status(400).json({ error: 'Invalid order' })

    for await (const item of orderToSave.items) {
        const itemToUpdate = await Underwear.findOne({ type: item.type })
        const newQuantity = itemToUpdate.quantity - Number(item.quantity)
        itemToUpdate.quantity = newQuantity

        try {
            await itemToUpdate.save()
        } catch (e) {
            return res.status(400).json({ error: e.message })
        }
    }

    const order = new Order({
        ...orderToSave,
        hasPaid: true,
    })

    try {
        await order.save()
        pendingOrders = pendingOrders.filter(
            order => order.paymentIntent.id !== id
        )
        return res.json(order)
    } catch (e) {
        console.log(e.message)
        return res.status(400).json({ error: e.message })
    }
})

ordersRouter.post('/create-payment-intent', async (req, res) => {
    // Make sure have country and state
    if (!req.body.country || !req.body.state)
        return res.status(400).json({ error: 'Missing country or state' })

    // Make sure items are an array
    if (!Array.isArray(req.body.items))
        return res.status(400).json({ error: 'Items are malformed' })

    // Calculate the total for the order
    const calculatedTotal = await calculateOrderAmount(
        req.body.items,
        req.body.country,
        req.body.state
    )
    if (calculatedTotal.error)
        return res.status(400).json({ error: calculatedTotal.error })

    // paymentDetails for creating a paymentIntent
    const paymentDetails = {
        amount: calculatedTotal.total, // stripe expects a total they can divide by 100
        currency: req.body.country === 'Canada' ? 'cad' : 'usd',
    }

    // orderDetails for creating a pending order
    const orderDetails = {
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        zip: req.body.zip,
        name: req.body.name,
        email: req.body.email,
        items: req.body.items,
        total: calculatedTotal.total / 100,
    }

    // If updating a paymentIntent
    if (req.body.update) {
        const clientSecret = req.body.update.clientSecret
        const order = pendingOrders.find(
            order => order.paymentIntent.client_secret === clientSecret
        )
        console.log(order)
        if (!order)
            return res.status(400).json({ error: 'Payment intent not found' })

        try {
            const paymentIntent = order.paymentIntent
            await stripe.paymentIntents.update(paymentIntent.id, {
                ...paymentDetails,
                metadata: {
                    name: orderDetails.name,
                    email: orderDetails.email,
                },
            })

            // Update pending orders
            pendingOrders = pendingOrders.map(order =>
                paymentIntent.client_secret === clientSecret
                    ? { ...orderDetails, paymentIntent }
                    : order
            )
            return res.send({ clientSecret })
        } catch (e) {
            return res.status(400).json({ error: e.message })
        }
    }

    // Else create a new paymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
        ...paymentDetails,
        metadata: {
            name: orderDetails.name,
            email: orderDetails.email,
        },
    })

    // Create a new pending order
    pendingOrders.push({
        paymentIntent,
        ...orderDetails,
    })

    return res.send({ clientSecret: paymentIntent.client_secret })
})

ordersRouter.put('/:id', async (req, res) => {
    if (!hasValidToken(req.token))
        return res.status(401).json({ error: 'Token missing or invalid' })

    // Requires a json object { updatedAttributes: { ... } }
    Order.findByIdAndUpdate(
        req.params.id,
        {
            ...req.body.updatedAttributes,
        },
        (err, doc) => {
            if (err) res.status(500).json({ error: e.message })
            res.json(doc)
        }
    )
})

ordersRouter.delete('/:id', async (req, res) => {
    if (!hasValidToken(req.token))
        return res.status(401).json({ error: 'Token missing or invalid' })

    Order.findByIdAndDelete(req.params.id, err => {
        if (err) res.json({ error: err.message })
        res.json({ response: 'Item deleted' })
    })
})

module.exports = ordersRouter
