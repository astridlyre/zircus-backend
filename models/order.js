const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const orderSchema = new mongoose.Schema({
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
        default: false
    },
    hasShipped: {
        type: Boolean,
        required: true,
        default: false
    },
    createdOn: {
        type: Date,
        required: true,
        default: new Date(),
    },
    email: {
        type: String,
        required: true,
    }
})

orderSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

module.exports = mongoose.model('Order', orderSchema)
