require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const STRIPE_PUBLIC = process.env.STRIPE_PUBLIC
const STRIPE_SECRET = process.env.STRIPE_SECRET

module.exports = {
    PORT,
    MONGODB_URI,
    STRIPE_PUBLIC,
    STRIPE_SECRET
}
