const {
  CP_CUSTOMER,
  CP_ORIGIN_ADDRESS,
  CP_ORIGIN_PHONE,
  CP_ORIGIN_CITY,
  CP_ORIGIN_STATE,
  CP_ORIGIN_PC,
} = require("../utils/config.js");
const TERMINAL_PO = 6485;
const AVERAGE_UNDERWEAR_WEIGHT = 0.056; // kgs
const dimensions = {
  width: 8.00,
  height: 6.00,
  length: 12.00,
};

const shippingCodes = {
  "Canada": {
    overnight: "DOM.PC",
    standard: "DOM.XP",
    economy: "DOM.EP",
  },
  "United States": {
    overnight: "USA.PW.PAK",
    standard: "USA.XP",
    economy: "USA.EP",
  },
};

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

const headers = {
  Accept: "application/vnd.cpc.ncshipment-v4+xml",
  "Content-Type": "application/vnd.cpc.ncshipment-v4+xml",
  "Accept-Language": "en-CA",
};

const xml = ({ name, email, items, shipping, address, orderId }) =>
  `<?xml version='1.0' encoding='utf-8'?>
<non-contract-shipment xmlns="http://www.canadapost.ca/ws/ncshipment-v4">
  <shipping-point-id>${TERMINAL_PO}</shipping-point-id>
  <delivery-spec>
    <service-code>${
    shippingCodes[address.country][shipping.method]
  }</service-code>
    <sender>
      <company>${company.name}</company>
      <contact-phone>${company.phone}</contact-phone>
      <address-details>
        <address-line-1>${company.address.line1}</address-line-1>
        <city>${company.address.city}</city>
        <prov-state>${company.address.state}</prov-state>
        <postal-zip-code>${company.postalCode}</postal-zip-code>
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
        <prov-state>${address.state}</prov-state>
        <country-code>${
    address.country === "Canada" ? "CA" : "US"
  }</country-code>
        <postal-zip-code>${address.postalCode}</postal-zip-code>
      </address-details>
    </destination>
    <options>
      <option>
        <option-code>SO</option-code>
      </option>
    </options>
    <parcel-characteristics>
      <weight>${items.reduce((acc, item) => acc + item.quantity, 0) *
    AVERAGE_UNDERWEAR_WEIGHT}</weight>
      <dimensions>
        <length>${dimensions.length}</length>
        <width>${dimensions.width}</width>
        <height>${dimensions.height}</height>
      </dimensions>
    </parcel-characteristics>
    <notification>
      <email>${email}</email>
      <on-shipment>true</on-shipment>
      <on-delivery>true</on-delivery>
    </notification>
    <print-preferences>
      <output-format>4x6</output-format>
      <encoding>PDF</encoding>
    </print-preferences>
    <preferences>
      <show-packing-instructions>true</show-packing-instructions>
      <show-postage-rate>true</show-postage-rate>
      <show-insured-value>true</show-insured-value>
    </preferences>
    <references>
      <order-id>${orderId}</order-id>
    </references>
  </delivery-spec>
</non-contract-shipment>`;

module.exports = {
  headers,
  xml,
  url: `/rs/${CP_CUSTOMER}/ncshipment`,
};
