const messageRouter = require('express').Router()
const Message = require('../models/message')

messageRouter.post('/', async (req, res) => {
    const newMessage = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    })

    try {
        const savedEntry = await newMessage.save()
        res.status(201).json(savedEntry)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})

module.exports = messageRouter
