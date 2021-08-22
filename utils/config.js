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
  CP_USERNAME: process.env.CP_USERNAME,
  CP_PASSWORD: process.env.CP_PASSWORD,
  CP_CUSTOMER: process.env.CP_CUSTOMER,
  CP_ORIGIN_PHONE: process.env.CP_ORIGIN_PHONE,
  CP_ORIGIN_ADDRESS: process.env.CP_ORIGIN_ADDRESS,
  CP_ORIGIN_CITY: process.env.CP_ORIGIN_CITY,
  CP_ORIGIN_STATE: process.env.CP_ORIGIN_STATE,
  CP_ORIGIN_PC: process.env.CP_ORIGIN_PC,
};
