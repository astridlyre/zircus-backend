const messageRouter = require('express').Router()
const Message = require('../models/message')
const { RateLimiterMemory } = require('rate-limiter-flexible')

const opts = {
    points: 6,
    duration: 10,
}

const rateLimiter = new RateLimiterMemory(opts)

messageRouter.all('/', (req, res, next) => {
    rateLimiter
        .consume(req.ip)
        .then(() => next())
        .catch(() => res.status(400).json({ error: 'Too many requests' }))
})

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

messageRouter.get('/', async (_, res) => {
    const messages = await Message.find({})
    if (!messages) return res.json({ error: 'No messages' })
    return res.json({ messages: messages })
})

module.exports = messageRouter
