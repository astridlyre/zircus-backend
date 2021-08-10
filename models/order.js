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
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        country: String,
        postal_code: String,
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
        address: {
            name: String,
            line1: String,
            line2: String,
            city: String,
            state: String,
            country: String,
            postal_code: String,
        },
    },
    createdOn: {
        type: Date,
        required: true,
        default: new Date(),
    },
    name: {
        type: String,
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
