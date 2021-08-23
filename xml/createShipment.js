const {
  CP_CUSTOMER,
  CP_ORIGIN_ADDRESS,
  CP_ORIGIN_PHONE,
  CP_ORIGIN_CITY,
  CP_ORIGIN_STATE,
  CP_ORIGIN_PC,
  DEFAULT_DIMENSIONS,
  AVERAGE_UNDERWEAR_WEIGHT,
} = require("../utils/config.js");
const TERMINAL_PO = "V9R5H0";
const countries = require("./countries.js");

const company = {
  name: "Zircus",
  phone: CP_ORIGIN_PHONE,
  address: {
    line1: CP_ORIGIN_ADDRESS,
    city: CP_ORIGIN_CITY,
    state: CP_ORIGIN_STATE,
    postalCode: CP_ORIGIN_PC,
  },
};

const headers = (lang) => ({
  Accept: "application/vnd.cpc.ncshipment-v4+xml",
  "Content-Type": "application/vnd.cpc.ncshipment-v4+xml",
  "Accept-Language": `${lang === "en" ? "en-CA" : "fr-CA"}`,
});

const xml = ({ name, email, items, shipping, address, orderId }) =>
  `<?xml version='1.0' encoding='utf-8'?>
<non-contract-shipment xmlns="http://www.canadapost.ca/ws/ncshipment-v4">
  <requested-shipping-point>${TERMINAL_PO}</requested-shipping-point>
  <delivery-spec>
    <service-code>${shipping.method}</service-code>
    <sender>
      <company>${company.name}</company>
      <contact-phone>${company.phone}</contact-phone>
      <address-details>
        <address-line-1>${company.address.line1}</address-line-1>
        <city>${company.address.city}</city>
        <prov-state>${company.address.state}</prov-state>
        <postal-zip-code>${company.address.postalCode}</postal-zip-code>
      </address-details>
    </sender>
    <destination>
      <name>${name}</name>
      <address-details>
        <address-line-1>${address.line1}</address-line-1>
        ${
    address.line2 ? `<address-line-2>${address.line2}</address-line-2>` : ""
  }
        <city>${address.city}</city>
        <prov-state>${
    countries[address.country].states.find((state) =>
      state.name === address.state
    ).code
  }</prov-state>
        <country-code>${countries[address.country].code}</country-code>
        <postal-zip-code>${
    address.postalCode.replace(" ", "")
  }</postal-zip-code>
      </address-details>
    </destination>
    <parcel-characteristics>
      <weight>${items.reduce((acc, item) => acc + item.quantity, 0) *
    AVERAGE_UNDERWEAR_WEIGHT}</weight>
      <dimensions>
        <length>${DEFAULT_DIMENSIONS.length}</length>
        <width>${DEFAULT_DIMENSIONS.width}</width>
        <height>${DEFAULT_DIMENSIONS.height}</height>
      </dimensions>
    </parcel-characteristics>
    <notification>
      <email>${email}</email>
      <on-shipment>true</on-shipment>
      <on-delivery>true</on-delivery>
      <on-exception>false</on-exception>
    </notification>
    <preferences>
      <show-packing-instructions>false</show-packing-instructions>
      <show-postage-rate>true</show-postage-rate>
      <show-insured-value>true</show-insured-value>
    </preferences>
    <references>
      <customer-ref-1>${orderId}</customer-ref-1>
    </references>
  </delivery-spec>
</non-contract-shipment>`;

module.exports = {
  headers,
  xml,
  url: `/rs/${CP_CUSTOMER}/ncshipment`,
};
