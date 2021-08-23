const withFlattenObjectArrays = require("./withFlattenObjectArrays.js");

class Shipment {
  #links;
  #shipmentId;
  #trackingPin;

  constructor(res) {
    const flattened = this.flattenObjectArrays(res).nonContractShipmentInfo;
    this.#shipmentId = flattened.shipmentId;
    this.#trackingPin = flattened.trackingPin;
    this.#links = flattened.links.link.map((link) => ({
      rel: link["$"].rel,
      href: link["$"].href,
      mediaType: link["$"].mediaType,
    }));
  }

  get label() {
    return this.#links.find((link) => link.rel === "label").href;
  }

  get shipmentId() {
    return this.#shipmentId;
  }

  get trackingPin() {
    return this.#trackingPin;
  }

  toJSON() {
    return {
      shipmentId: this.#shipmentId,
      trackingPin: this.#trackingPin,
      label: this.label,
      links: this.#links.map((link) => ({ ...link })),
    };
  }

  toString() {
    return this.toJSON();
  }
}

Object.assign(Shipment.prototype, withFlattenObjectArrays());

module.exports = Shipment;
