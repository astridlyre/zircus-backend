require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  STRIPE_PUBLIC: process.env.STRIPE_PUBLIC,
  STRIPE_SECRET: process.env.STRIPE_SECRET,
  MAIL_USERNAME: process.env.MAIL_USERNAME,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  PAYPAL_CLIENTID: process.env.PAYPAL_CLIENTID,
  PAYPAL_SECRET: process.env.PAYPAL_SECRET,
};
