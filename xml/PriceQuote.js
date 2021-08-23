const util = require("util");
const withFlattenObjectArrays = require("./withFlattenObjectArrays.js");

class PriceQuote {
  #quotes;

  constructor({ res, codes }) {
    const flattened = this.flattenObjectArrays(res);
    this.#quotes = flattened.priceQuotes.priceQuote.map((quote) =>
      PriceQuote.parsePriceQuote(quote)
    ).filter((quote) => codes.has(quote.serviceCode));
  }

  get quotes() {
    return this.#quotes.slice();
  }

  toJSON() {
    return this.#quotes.slice();
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }

  static parsePriceQuote(
    { serviceCode, serviceLink, serviceName, priceDetails, serviceStandard },
  ) {
    return {
      serviceCode,
      serviceLink: {
        href: serviceLink["$"].href,
        mediaType: serviceLink["$"].mediaType,
      },
      serviceName,
      priceDetails,
      serviceStandard,
    };
  }
}

Object.assign(PriceQuote.prototype, withFlattenObjectArrays());

module.exports = PriceQuote;
