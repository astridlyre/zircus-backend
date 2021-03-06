const {
  CP_CUSTOMER,
  CP_ORIGIN_PC,
  DEFAULT_DIMENSIONS,
  AVERAGE_UNDERWEAR_WEIGHT,
} = require("../utils/config.js");

const headers = (lang) => ({
  Accept: "application/vnd.cpc.ship.rate-v4+xml",
  "Content-Type": "application/vnd.cpc.ship.rate-v4+xml",
  "Accept-Language": `${lang === "en" ? "en-CA" : "fr-CA"}`,
});

const xml = ({ items, address }) =>
  `<?xml version='1.0' encoding='utf-8'?>
<mailing-scenario xmlns="http://www.canadapost.ca/ws/ship/rate-v4">
    <customer-number>${CP_CUSTOMER}</customer-number>
    <parcel-characteristics>
      <weight>${items.reduce((acc, item) => acc + item.quantity, 0) *
    AVERAGE_UNDERWEAR_WEIGHT}</weight>
      <dimensions>
        <length>${DEFAULT_DIMENSIONS.length}</length>
        <width>${DEFAULT_DIMENSIONS.width}</width>
        <height>${DEFAULT_DIMENSIONS.height}</height>
      </dimensions>
    </parcel-characteristics>
    <origin-postal-code>${CP_ORIGIN_PC}</origin-postal-code>
    <destination>
      ${address.country === "Canada" ? toCanada(address) : toUSA(address)}
    </destination>
</mailing-scenario>`;

const toCanada = ({ postalCode }) =>
  `<domestic>
    <postal-code>${postalCode.replace(" ", "").toUpperCase()}</postal-code>
</domestic>`;

const toUSA = ({ postalCode }) =>
  `<united-states>
    <zip-code>${postalCode.replace(" ", "")}</zip-code>
</united-states>`;

module.exports = {
  headers,
  xml,
  url: "/rs/ship/price",
};
