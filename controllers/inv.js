const invRouter = require("express").Router()
const { hasValidToken, isValidType } = require('../utils/middleware')
const Underwear = require("../models/underwear")
const User = require("../models/user")

invRouter.get("/", async (req, res) => {
    const inv = await Underwear.find({})
    inv.length > 0 ? res.json(inv) : res.status(404).json({ error: "No Inventory Items Found" })
})

invRouter.get("/:type", async (req, res) => {
    if (!isValidType(req.params.type))
        return res.status(400).json({ error: `Invalid type ${req.params.type}` })
    const undie = await Underwear.findOne({ type: req.params.type })
    undie ? res.json(undie) : res.status(404).json({ error: 'Not found' })
})

invRouter.post("/", async (req, res) => {
    if (!hasValidToken(req.token))
        return res.status(401).json({ error: "Token missing or invalid" })

    if (!isValidType(req.body.type))
        return res.status(400).json({ error: `Invalid type ${req.body.type}` })

    const undie = new Underwear({
        type: req.body.type,
        quantity: Number(req.body.quantity),
        price: Number(req.body.price),
    })
    const savedEntry = await undie.save()
    res.status(201).json(savedEntry)
})

invRouter.put("/", async (req, res) => {
    if (!hasValidToken(req.token))
        return res.status(401).json({ error: "Token missing or invalid" })

    if (!Array.isArray(req.body.items))
        return res.status(400).json({ error: "Malformed items" })

    const response = []

    for await (const item of req.body.items) {
        if (!isValidType(item.type))
            return res.status(400).json({ error: `Invalid type ${item.type}` })

        const undie = await Underwear.findOne({ type: item.type })
        undie.price = Number(item.price)
        undie.quantity = Number(item.quantity)
        undie.save()
        response.push(undie)
    }

    res.json(response)
})

module.exports = invRouter
