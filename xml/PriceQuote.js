class PriceQuote {
  #quotes;

  constructor(res) {
    const flattened = PriceQuote.rmarr(res);
    this.#quotes = flattened["price-quotes"]["price-quote"].map((quote) =>
      PriceQuote.parsePriceQuote(quote)
    );
  }

  get quotes() {
    return this.#quotes.slice();
  }

  toJSON() {
    return this.#quotes.map((quote) => ({
      code: quote.code,
      link: quote.link,
      name: quote.name,
      priceDetails: {
        base: quote.priceDetails.base,
        total: quote.priceDetails.due,
        tax: quote.priceDetails.taxes.gst,
      },
      details: {
        days: quote.serviceStandard.expectedTransitTime,
        date: quote.serviceStandard.expectedDeliveryDate,
      },
    }));
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }

  static parsePriceQuote(quote) {
    const extractPriceDetails = (
      { base, taxes, due, options, adjustments },
    ) => {
      return {
        base: Number(base[0]),
        taxes: {
          gst: taxes[0].gst,
          pst: taxes[0].pst,
          hst: taxes[0].hst,
        },
        due: Number(due[0]),
        options: options ? options[0] : null,
        adjustments: adjustments ? adjustments[0] : null,
      };
    };
    const extractServiceStandard = (
      { expectedTransitTime, expectedDeliveryDate },
    ) => ({
      expectedDeliveryDate: expectedDeliveryDate
        ? expectedDeliveryDate[0]
        : null,
      expectedTransitTime: expectedTransitTime ? expectedTransitTime[0] : null,
    });
    return {
      code: quote["service-code"],
      link: {
        href: quote["service-link"]["$"].href,
        mediaType: quote["service-link"]["$"]["media-type"],
      },
      name: quote["service-name"],
      priceDetails: extractPriceDetails(quote["price-details"]),
      serviceStandard: extractServiceStandard({
        expectedTransitTime: quote["service-standard"]["expected-transit-time"],
        expectedDeliveryDate:
          quote["service-standard"]["expected-delivery-date"],
      }),
    };
  }

  static rmarr(value) {
    if (Array.isArray(value)) {
      if (value.length === 1) {
        return value[0];
      } else {
        return value.map((v) => PriceQuote.rmarr(v));
      }
    } else if (typeof value === "object") {
      for (const key in value) {
        value[key] = PriceQuote.rmarr(value[key]);
      }
      return value;
    } else return value;
  }
}

module.exports = PriceQuote;
