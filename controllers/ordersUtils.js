const { hasValidToken } = require("../utils/middleware");
const Underwear = require("../models/underwear");

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

function calculateShipping({ method, taxRate }) {
  switch (method) {
    case "overnight":
      return 29.99 + (29.99 * taxRate);
    case "standard":
      return 9.99 + (9.99 * taxRate);
    default:
      return 5.99 + (5.99 * taxRate);
  }
}

function enrichedItem({ reference, item, preferredLanguage, taxRate }) {
  return {
    name: `${
      reference.name[preferredLanguage]
    } - ${reference.color} - ${reference.size}`,
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
  const shipping = {
    method: orderDetails.shipping.method,
    total: calculateShipping({
      method: orderDetails.shipping.method,
      taxRate,
    }),
  };
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
