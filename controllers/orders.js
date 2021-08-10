const ordersRouter = require('express').Router()
const { hasValidToken, isValidType } = require('../utils/middleware')
const {
    STRIPE_SECRET,
    MAIL_USERNAME,
    MAIL_PASSWORD,
    MAIL_ID,
    MAIL_SECRET,
    MAIL_REFRESH_TOKEN,
} = require('../utils/config')
const stripe = require('stripe')(STRIPE_SECRET)
const Order = require('../models/order')
const Underwear = require('../models/underwear')
const { orderTemplate, orderTemplateText } = require('../templates/order')
const { broadcast } = require('../controllers/subscribe')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD,
        clientId: MAIL_ID,
        clientSecret: MAIL_SECRET,
        refreshToken: MAIL_REFRESH_TOKEN,
    },
})

const updateInventoryItems = async items => {
    for await (const item of items) {
        const itemToUpdate = await Underwear.findOne({ type: item.type })
        const newQuantity = itemToUpdate.quantity - Number(item.quantity)
        itemToUpdate.quantity = newQuantity > 0 ? newQuantity : 0

        try {
            await itemToUpdate.save()
            return { error: null }
        } catch (e) {
            return { error: e.message }
        }
    }
}

const calculateOrderAmount = async (items, country, state, shippingMethod) => {
    // Update new inventory items and tally up price
    let total = 0

    for await (const item of items) {
        const itemToUpdate = await Underwear.findOne({ type: item.type })
        if (!itemToUpdate) return { error: `Invalid type ${item.type}` }
        const newQuantity = itemToUpdate.quantity - Number(item.quantity)
        if (newQuantity < 0)
            return { error: `Insufficient stock of ${item.type}` }

        // update total
        total += Number(item.quantity) * Number(itemToUpdate.price)
    }

    let shipping = 0
    switch (shippingMethod) {
        case 'overnight':
            shipping = 29.99
            break
        case 'standard':
            shipping = 9.99
            break
        default:
            shippingMethod = 'economy'
            shipping = 5.99
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

    return {
        total: Math.round((total + (total + shipping) * taxRate) * 100),
        shipping: {
            method: shippingMethod,
            total: shipping,
        },
    }
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
    const event = req.body
    const id = event.data.object.id
    const orderToUpdate = await Order.findOne({ orderId: id })
    if (!orderToUpdate)
        return res.status(400).json({ error: 'Invalid order id' })

    // Set paid to true
    orderToUpdate.hasPaid = true

    // Update inventory
    const { inventoryUpdateError } = await updateInventoryItems(
        orderToUpdate.items
    )

    try {
        await orderToUpdate.save()
        broadcast(
            JSON.stringify({
                type: 'paid order',
                data: { name: orderToUpdate.name },
            })
        )
        /* const info = await transporter.sendMail({
            from: 'Zircus <erin.danger.burton@gmail.com>',
            to: orderToUpdate.email,
            subject: orderToUpdate.lang === 'fr' ? 'Votre order' : 'Your order',
            text: orderTemplateText(orderToUpdate),
            html: orderTemplate(orderToUpdate),
        }) */
        if (inventoryUpdateError)
            return res.status(400).json({ error: inventoryUpdateError })
        return res.json({ order: orderToUpdate })
    } catch (e) {
        return res.status(400).json({ error: e.message })
    }
})

/* ordersRouter.get('/:id', async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (!order) return res.status(404).json({ error: 'Order not found' })
    return res.send(orderTemplate(order))
}) */

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
        req.body.state,
        req.body.shippingMethod
    )
    if (calculatedTotal.error)
        return res.status(400).json({ error: calculatedTotal.error })

    // paymentDetails for creating a paymentIntent
    const paymentDetails = {
        amount: calculatedTotal.total, // stripe expects a total they can divide by 100
        currency: req.body.country === 'Canada' ? 'cad' : 'usd',
        receipt_email: req.body.email,
        shipping: calculatedTotal.shipping,
        billing_details: {
            address: {
                city: req.body.city,
                state: req.body.state,
                country: req.body.country,
                line1: req.body.streetAddress,
            },
            email: req.body.email,
            name: req.body.name,
        },
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
        shipping: calculatedTotal.shipping,
    }

    // If updating a paymentIntent
    if (req.body.update !== null) {
        const clientSecret = req.body.update
        const orderToUpdate = await Order.findOneAndUpdate(
            { clientSecret },
            orderDetails,
            e => e && res.status(400).json({ error: e.message })
        )
        if (!orderToUpdate)
            return res.status(400).json({ error: 'Payment intent not found' })

        try {
            await stripe.paymentIntents.update(
                orderToUpdate.orderId,
                paymentDetails
            )
            return res.send({ clientSecret, total: orderDetails.total })
        } catch (e) {
            return res.status(400).json({ error: e.message })
        }
    }

    // Else create a new paymentIntent
    const paymentIntent = await stripe.paymentIntents.create(paymentDetails)

    // Create a new pending order
    const newOrder = new Order({
        ...orderDetails,
        clientSecret: paymentIntent.client_secret,
        orderId: paymentIntent.id,
    })

    try {
        // Save new order
        await newOrder.save()
        // Notify dashboard of pending order
        broadcast(
            JSON.stringify({
                type: 'pending order',
                data: { name: orderDetails.name },
            })
        )
        return res.json(newOrder)
    } catch (e) {
        return res.status(400).json({ error: e.message })
    }
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
            if (err) return res.status(500).json({ error: e.message })
            return res.json(doc)
        }
    )
})

ordersRouter.delete('/:id', async (req, res) => {
    if (!hasValidToken(req.token))
        return res.status(401).json({ error: 'Token missing or invalid' })

    const order = await Order.findById(req.params.id)
    if (!order) return res.json({ error: 'Order not found' })

    // Re-add order items to inv stock
    for await (const item of order.items) {
        const itemToUpdate = await Underwear.findOne({ type: item.type })
        itemToUpdate.quantity += item.quantity
        try {
            await itemToUpdate.save()
        } catch (e) {
            return res.json({ error: e.message })
        }
    }

    try {
        await Order.findByIdAndDelete(req.params.id, err => {
            if (err) return res.json({ error: err })
            broadcast(
                JSON.stringify({
                    type: 'deleted order',
                    data: { response: 'Item deleted' },
                })
            )
            return res.json({ response: 'Item deleted' })
        })
    } catch (e) {
        return res.json({ error: e.message })
    }
})

module.exports = ordersRouter
