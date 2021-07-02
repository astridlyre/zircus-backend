const ordersRouter = require("express").Router()
const { hasValidToken, isValidType } = require("../utils/middleware")
const Order = require("../models/order")
const Underwear = require("../models/underwear")

ordersRouter.get("/", async (req, res) => {
    if (!hasValidToken(req.token))
        return res.status(401).json({ error: "Token missing or invalid" })

    const orders = await Order.find({})
    return orders.length > 0
        ? res.json(orders)
        : res.status(404).json({ error: "No orders found" })
})

ordersRouter.post("/", async (req, res) => {
    /* if (!hasValidToken(req.token))
        return res.status(401).json({ error: "Token missing or invalid" }) */

    console.log(req.headers)
    if (!Array.isArray(req.body.items))
        return res.status(400).json({ error: "Items are malformed" })

    // Update new inventory items and tally up price
    let total = 0
    for await (let item of req.body.items) {
        if (!isValidType(item.type))
            return res.status(400).json({ error: `Invalid type ${item.type}` })

        const itemToUpdate = await Underwear.findOne({ type: item.type })
        const newQuantity = itemToUpdate.quantity - Number(item.quantity)

        if (newQuantity < 0)
            return res.status(400).json({ error: "Invalid item quantities" })

        itemToUpdate.quantity = newQuantity

        try {
            await itemToUpdate.save()
        } catch (e) {
            return res.status(500).json({ error: e.message })
        }

        total += Number(item.quantity) * Number(itemToUpdate.price)
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

    try {
        const savedOrder = await order.save()
        return res.status(201).json(savedOrder)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
})

ordersRouter.put("/:id", async (req, res) => {
    if (!hasValidToken(req.token))
        return res.status(401).json({ error: "Token missing or invalid" })

    // Requires a json object { updatedAttributes: { ... } }
    Order.findByIdAndUpdate(req.params.id, {
        ...req.body.updatedAttributes,
    }, (err, doc) => {
        if (err) res.status(500).json({ error: e.message })
        res.json(doc)
    })
})

ordersRouter.delete("/:id", async (req, res) => {
    if (!hasValidToken(req.token))
        return res.status(401).json({ error: "Token missing or invalid" })

    Order.findByIdAndDelete(req.params.id, (err) => {
        if (err) res.json({ error: err.message })
        res.json({ response: 'Item deleted' })
    })
})

module.exports = ordersRouter
