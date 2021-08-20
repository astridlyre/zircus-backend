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

const calculateOrderAmount = async (
  orderDetails,
) => {
  // Update new inventory items and tally up price
  let total = 0;
  let taxRate = 0;

  if (orderDetails.address.country === "Canada") {
    switch (orderDetails.address.state) {
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

  const updatedItems = [];
  for await (const item of orderDetails.items) {
    const itemToUpdate = await Underwear.findOne({ type: item.type });
    if (!itemToUpdate) return { error: `Invalid type ${item.type}` };
    const newQuantity = itemToUpdate.quantity - Number(item.quantity);
    if (newQuantity < 0) {
      return { error: `Insufficient stock of ${item.type}` };
    }

    updatedItems.push({
      name: `${
        itemToUpdate.name[orderDetails.preferredLanguage]
      } - ${itemToUpdate.color} - ${itemToUpdate.size}`,
      type: item.type,
      image: itemToUpdate.images.sm_a,
      price: itemToUpdate.price,
      quantity: item.quantity,
      tax: twoDecimals(itemToUpdate.price * taxRate),
      description: itemToUpdate.description,
    });

    // update total
    total += item.quantity * itemToUpdate.price;
  }

  const shipping = orderDetails.shipping.method === "overnight"
    ? { method: "overnight", total: twoDecimals(29.99 + 29.99 * taxRate) }
    : orderDetails.shipping.method === "standard"
    ? { method: "standard", total: twoDecimals(9.99 + 9.99 * taxRate) }
    : { method: "economy", total: twoDecimals(5.99 + 5.99 * taxRate) };

  const subtotal = twoDecimals(
    updatedItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    ),
  );
  const tax = twoDecimals(
    updatedItems.reduce((acc, item) => acc + item.quantity * item.tax, 0),
  );
  total = twoDecimals(subtotal + tax + shipping.total);

  return {
    error: null,
    order: {
      ...orderDetails,
      total,
      shipping,
      items: updatedItems,
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
  calculateOrderAmount,
};
