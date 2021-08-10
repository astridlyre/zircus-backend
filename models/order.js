const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const orderSchema = new mongoose.Schema({
    lang: {
        type: String,
        default: 'en',
    },
    items: {
        type: Array,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    hasPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    hasShipped: {
        type: Boolean,
        required: true,
        default: false,
    },
    shipping: {
        method: String,
        price: Number,
    },
    createdOn: {
        type: Date,
        required: true,
        default: new Date(),
    },
    email: {
        type: String,
        required: true,
    },
    orderId: {
        type: String,
        required: true,
        unique: true,
    },
    clientSecret: {
        type: String,
        required: true,
        unique: true,
    },
})

orderSchema.plugin(uniqueValidator)
orderSchema.set('toJSON', {
    transform: (_, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

module.exports = mongoose.model('Order', orderSchema)
