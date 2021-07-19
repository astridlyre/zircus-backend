const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const underwearSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        unique: true,
    },
    quantity: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
    name: {
        en: String,
        fr: String,
    },
    prefix: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    images: {
        sm_a: String,
        sm_b: String,
        lg_a: String,
        lg_b: String,
    },
    description: String,
})

underwearSchema.plugin(uniqueValidator)
underwearSchema.set('toJSON', {
    transform: (_, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

module.exports = mongoose.model('Underwear', underwearSchema)
