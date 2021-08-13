const { hasValidToken } = require("../utils/middleware");
const Underwear = require("../models/underwear");

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

const calculateOrderAmount = async ({ items, address, shippingMethod }) => {
  // Update new inventory items and tally up price
  let total = 0;
  for await (const item of items) {
    const itemToUpdate = await Underwear.findOne({ type: item.type });
    if (!itemToUpdate) return { error: `Invalid type ${item.type}` };
    const newQuantity = itemToUpdate.quantity - Number(item.quantity);
    if (newQuantity < 0) {
      return { calculateTotalError: `Insufficient stock of ${item.type}` };
    }

    // update total
    total += Number(item.quantity) * Number(itemToUpdate.price);
  }

  let shipping = 0;
  switch (shippingMethod) {
    case "overnight":
      shipping = 29.99;
      break;
    case "standard":
      shipping = 9.99;
      break;
    default:
      shippingMethod = "economy";
      shipping = 5.99;
  }

  let taxRate = 0;
  if (address.country === "Canada") {
    switch (address.state) {
      case "New Brunswick":
      case "Newfoundland and Labrador":
      case "Nova Scotia":
      case "Prince Edward Island":
        taxrate = 0.15;
        break;
      case "Ontario":
        taxRate = 0.13;
        break;
      default:
        taxRate = 0.05;
    }
  } else {
    taxRate = 0.07; // US Tax rate?
  }

  return {
    total: Math.round(
      (total + shipping + (total + shipping) * taxRate) * 100,
    ) / 100,
    shipping: {
      method: shippingMethod,
      total: shipping,
    },
    calculateTotalError: null,
  };
};

module.exports = {
  updateInventoryItems,
  calculateOrderAmount,
};
