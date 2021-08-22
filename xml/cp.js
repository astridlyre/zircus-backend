const { CP_USERNAME, CP_PASSWORD } = require("../utils/config.js");
const axios = require("axios");
const rate = require("./rate.js");
const createShipment = require("./createShipment.js");
const xml2js = require("xml2js");
const PriceQuote = require("./PriceQuote.js");

const auth = {
  username: CP_USERNAME,
  password: CP_PASSWORD,
};
const API_ENDPOINT = "https://ct.soa-gw.canadapost.ca";

async function getRate(orderData) {
  return await axios.post(`${API_ENDPOINT}${rate.url}`, rate.xml(orderData), {
    headers: rate.headers,
    auth,
  }).then((res) => res.data).then((res) => xml2js.parseStringPromise(res)).then(
    (res) => new PriceQuote(res).toJSON(),
  );
}

async function getShipment(orderData) {
  return await axios.post(
    `${API_ENDPOINT}${createShipment.url}`,
    createShipment.xml(orderData),
    {
      headers: createShipment.headers,
      auth,
    },
  ).then((res) => {
    console.log(res);
  });
}

module.exports = {
  getRate,
  getShipment,
};
