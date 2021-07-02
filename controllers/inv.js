const invRouter = require("express").Router()
const { hasValidToken, isValidType } = require("../utils/middleware")
const Underwear = require("../models/underwear")

async function initDB(inv) {
    for await (const item of inv) {
        await item.delete()
    }
    const validTypes = []
    for (let type of ["ff", "pf", "cf"])
        for (let color of ["yellow", "purple", "teal", "black", "stripe"])
            for (let size of [
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
            ])
                validTypes.push(`${type}-${color}-${size}`)

    for await (const type of validTypes) {
        const [prefix, color, size] = type.split("-")
        const newItem = new Underwear({
            type,
            name:
                prefix === "ff"
                    ? "Flat front briefs"
                    : prefix === "pf"
                        ? "Pouch front briefs"
                        : "Compression front briefs",
            prefix,
            color,
            size,
            price: prefix === "cf" ? 38 : 30,
            quantity: 1,
            images: [
                `/assets/img/products/masked/${prefix}-${color}-a-1920.png`,
                `/assets/img/products/masked/${prefix}-${color}-b-1920.png`
            ]
        })
        console.log(newItem)
        try {
            await newItem.save()
        } catch (e) {
            console.log(e.message)
        }
    }
}

invRouter.get("/", async (req, res) => {
    const inv = await Underwear.find({})

    // initDB(inv)

    return inv.length > 0
        ? res.json(inv)
        : res.status(404).json({ error: "No Inventory Items Found" })
})

invRouter.get("/:type", async (req, res) => {
    if (!isValidType(req.params.type))
        return res.status(400).json({ error: `Invalid type ${req.params.type}` })

    const foundItem = await Underwear.findOne({ type: req.params.type })

    return foundItem
        ? res.json(foundItem)
        : res.status(404).json({ error: "Not found" })
})

invRouter.post("/", async (req, res) => {
    if (!hasValidToken(req.token))
        return res.status(401).json({ error: "Token missing or invalid" })

    if (!isValidType(req.body.type))
        return res.status(400).json({ error: `Invalid type ${req.body.type}` })

    const [prefix, color, size] = req.body.type.split("-")
    const newItem = new Underwear({
        type: req.body.type,
        quantity: Number(req.body.quantity),
        price: Number(req.body.price),
        name:
            prefix === "ff"
                ? "Flat front briefs"
                : prefix === "pf"
                    ? "Pouch front briefs"
                    : "Compression front briefs",
        prefix,
        color,
        size,
        images: [
            `/assets/img/products/masked/${prefix}-${color}-a-1920.png`,
            `/assets/img/products/masked/${prefix}-${color}-b-1920.png`,
        ]
    })

    try {
        const savedEntry = await newItem.save()
        res.status(201).json(savedEntry)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})

invRouter.put("/", async (req, res) => {
    if (!hasValidToken(req.token))
        return res.status(401).json({ error: "Token missing or invalid" })

    if (!isValidType(req.body.type))
        return res.status(400).json({ error: `Invalid type ${req.body.type}` })

    // Requires a json object { type: req.body.type, updatedAttributes: { ... } }
    Underwear.findOneAndUpdate(
        { type: req.body.type },
        {
            quantity: req.body.quantity,
            price: req.body.price,
        },
        { new: true },
        (err, doc) => {
            if (err) res.status(500).json({ error: e.message })
            res.json(doc)
        }
    )
})

invRouter.delete("/:type", async (req, res) => {
    if (!hasValidToken(req.token))
        return res.status(401).json({ error: "Token missing or invalid" })

    if (!isValidType(req.body.type))
        return res.status(400).json({ error: `Invalid type ${req.params.type}` })

    Underwear.findOneAndDelete({ type: req.params.type }, (err) => {
        if (err) res.status(500).json({ error: e.message })
        res.json({ response: "Item deleted" })
    })
})

module.exports = invRouter
