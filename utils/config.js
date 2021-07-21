require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const STRIPE_PUBLIC = process.env.STRIPE_PUBLIC
const STRIPE_SECRET = process.env.STRIPE_SECRET
const MAIL_USERNAME = process.env.MAIL_USERNAME
const MAIL_PASSWORD = process.env.MAIL_PASSWORD
const MAIL_ID = process.env.OAUTH_CLIENTID
const MAIL_SECRET = process.env.OAUTH_CLIENT_SECRET
const MAIL_REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN

module.exports = {
    PORT,
    MONGODB_URI,
    STRIPE_PUBLIC,
    STRIPE_SECRET,
    MAIL_USERNAME,
    MAIL_PASSWORD,
    MAIL_ID,
    MAIL_SECRET,
    MAIL_REFRESH_TOKEN,
}
