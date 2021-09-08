const nodemailer = require("nodemailer");
const { MAIL_USERNAME, MAIL_PASSWORD } = require("../utils/config.js");

const transporter = nodemailer.createTransport({
  pool: true,
  host: "smtppro.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: MAIL_USERNAME,
    pass: MAIL_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) console.log(error);
  else console.log("server is ready to take our messages");
});

module.exports = transporter;
