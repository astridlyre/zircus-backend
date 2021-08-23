const { hasValidToken } = require("../utils/middleware");
const Underwear = require("../models/underwear");
const { getRate } = require("../xml/cp.js");

const twoDecimals = (n) => Math.round(n * 100) / 100;

const updateInventoryItems = async (items) => {
  for await (const item of items) {
    const itemToUpdate = await Underwear.findOne({ type: item.type });
    const newQuantity = itemToUpdate.quantity - Number(item.quantity);
    itemToUpdate.quantity = newQuantity > 0 ? newQuantity : 0;

    try {
      await itemToUpdate.save();
      return { error: null };
    } catch (e) {
      return { error: e.message };
    }
  }
};

function calculateTaxRate({ country, state }) {
  if (country === "Canada") {
    switch (state) {
      case "New Brunswick":
      case "Newfoundland and Labrador":
      case "Nova Scotia":
      case "Prince Edward Island":
        return 0.15;
      case "Ontario":
        return 0.13;
      default:
        return 0.05;
    }
  } else {
    return 0.07; // US Tax rate?
  }
}

async function calculateShipping(orderData) {
  try {
    const res = await getRate(orderData);
    const quote = res.find((quote) =>
      quote.serviceCode === orderData.shipping.method
    );
    if (!quote) {
      return {
        error:
          `Unable to calculate shipping with method ${orderData.shipping.method}`,
      };
    }
    return {
      method: orderData.shipping.method,
      total: Number(quote.priceDetails.due),
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
}

function enrichedItem({ reference, item, preferredLanguage, taxRate }) {
  return {
    name: `${
      reference.name[preferredLanguage]
    } - ${reference.color} - ${reference.size}`,
    url: `${
      reference.name.en.toLowerCase()
        .split(" ")
        .join("-")
    }${preferredLanguage === "en" ? "" : `-${preferredLanguage}`}.html`,
    type: item.type,
    image: reference.images.sm_a,
    price: reference.price,
    quantity: item.quantity,
    tax: twoDecimals(reference.price * taxRate),
    description: reference.description,
  };
}

const enrichOrder = async (
  orderDetails,
) => {
  // Update new inventory items and tally up price
  const taxRate = calculateTaxRate(orderDetails.address);
  const enrichedItems = [];
  for await (const item of orderDetails.items) {
    const itemToUpdate = await Underwear.findOne({ type: item.type });
    if (!itemToUpdate) return { error: `Invalid type ${item.type}` };
    if (itemToUpdate.quantity - Number(item.quantity) < 0) {
      return { error: `Insufficient stock of ${item.type}` };
    }
    enrichedItems.push(enrichedItem({
      reference: itemToUpdate,
      preferredLanguage: orderDetails.preferredLanguage,
      item,
      taxRate,
    }));
  }

  const shipping = await calculateShipping(orderDetails);
  if (shipping.error) {
    return {
      error: shipping.error,
    };
  }

  const subtotal = twoDecimals(
    enrichedItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    ),
  );
  const tax = twoDecimals(
    enrichedItems.reduce((acc, item) => acc + item.quantity * item.tax, 0),
  );
  const total = twoDecimals(subtotal + tax + shipping.total);

  return {
    error: null,
    order: {
      ...orderDetails,
      total,
      shipping,
      items: enrichedItems,
      createdOn: new Date(),
      hasPaid: false,
      hasShipped: false,
      breakdown: {
        subtotal,
        tax,
        shipping: shipping.total,
      },
    },
  };
};

module.exports = {
  updateInventoryItems,
  enrichOrder,
};
