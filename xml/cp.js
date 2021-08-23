const fs = require("fs");
const util = require("util");
const { CP_USERNAME, CP_PASSWORD } = require("../utils/config.js");
const axios = require("axios");
const rate = require("./rate.js");
const shipment = require("./createShipment.js");
const xml2js = require("xml2js");
const PriceQuote = require("./PriceQuote.js");
const Shipment = require("./Shipment.js");
const testData = require("./test.js");

const DOMESTIC_CODES = new Set([
  "DOM.XP",
  "DOM.PC",
  "DOM.EP",
]);

const USA_CODES = new Set([
  "USA.XP",
  "USA.EP",
  "USA.PW.ENV",
]);

const auth = {
  username: CP_USERNAME,
  password: CP_PASSWORD,
};
const API_ENDPOINT = "https://ct.soa-gw.canadapost.ca";

async function getRate(orderData) {
  return await axios.post(`${API_ENDPOINT}${rate.url}`, rate.xml(orderData), {
    headers: rate.headers(orderData.preferredLanguage),
    auth,
  }).then((res) => xml2js.parseStringPromise(res.data)).then(
    (res) => {
      const quotes = new PriceQuote({
        res,
        codes: orderData.address.country === "Canada"
          ? DOMESTIC_CODES
          : USA_CODES,
      })
        .toJSON();
      return quotes;
    },
  );
}

async function createShipment(orderData) {
  return await axios.post(
    `${API_ENDPOINT}${shipment.url}`,
    shipment.xml(orderData),
    {
      headers: shipment.headers(orderData.preferredLanguage),
      auth,
    },
  ).then((res) => xml2js.parseStringPromise(res.data)).then((data) =>
    new Shipment(data).toJSON()
  );
}

async function getArtifact(url) {
  return await axios.get(url, {
    headers: {
      "Accept": "application/pdf",
    },
    auth,
    responseType: "arraybuffer",
  });
}

async function testShipment() {
  const res = await createShipment(testData);
  const file = await getArtifact(res.label);
  fs.writeFile(`${res.shipmentId}.pdf`, file.data, (err) => {
    if (err) throw err;
    console.log("File has been saved");
  });
}

module.exports = {
  getRate,
  createShipment,
  getArtifact,
  USA_CODES,
  DOMESTIC_CODES,
};
