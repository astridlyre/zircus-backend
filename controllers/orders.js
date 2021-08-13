const ordersRouter = require("express").Router();
const { hasValidToken } = require("../utils/middleware");
const {
  STRIPE_SECRET,
  MAIL_USERNAME,
  MAIL_PASSWORD,
  MAIL_ID,
  MAIL_SECRET,
  MAIL_REFRESH_TOKEN,
} = require("../utils/config");
const stripe = require("stripe")(STRIPE_SECRET);
const Order = require("../models/order");
const Underwear = require("../models/underwear");
// const { orderTemplate, orderTemplateText } = require('../templates/order')
const { broadcast } = require("../controllers/subscribe");
const nodemailer = require("nodemailer");
const formValidator = require("../utils/formValidator.js");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: MAIL_USERNAME,
    pass: MAIL_PASSWORD,
    clientId: MAIL_ID,
    clientSecret: MAIL_SECRET,
    refreshToken: MAIL_REFRESH_TOKEN,
  },
});

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

async function handlePaypalPayment({ orderDetails, amount, res }) {
  if (orderDetails.total !== Number(amount.value)) {
    return res.status(400).json({
      error: `Totals do not match: ${orderDetails.total} vs ${amount.value}`,
    });
  }

  // Create a new pending order
  const newOrder = new Order(orderDetails);
  try {
    // Save new order
    await newOrder.save();
    // Notify dashboard of pending order
    broadcast(
      JSON.stringify({
        type: "pending order",
        data: { name: orderDetails.name },
      }),
    );
    return res.json(newOrder);
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
}

async function handleStripePayment({ orderDetails, res }) {
  const paymentDetails = {
    amount: orderDetails.total * 100, // stripe expects a total they can divide by 100
    currency: orderDetails.address.country === "Canada" ? "cad" : "usd",
  };

  // If updating a paymentIntent
  if (orderDetails.orderId) {
    const orderToUpdate = await Order.findOneAndUpdate(
      { orderId: orderDetails.orderId },
      orderDetails,
      (e) => e && res.status(400).json({ error: e.message }),
    );
    if (!orderToUpdate) {
      return res.status(400).json({ error: "Payment intent not found" });
    }

    try {
      await stripe.paymentIntents.update(orderDetails.orderId, paymentDetails);
      return res.json(orderToUpdate);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }

  // Else create a new paymentIntent
  const paymentIntent = await stripe.paymentIntents.create(paymentDetails);

  // Create a new pending order
  const newOrder = new Order({
    ...orderDetails,
    orderId: paymentIntent.id,
  });

  try {
    // Save new order
    await newOrder.save();
    // Notify dashboard of pending order
    broadcast(
      JSON.stringify({
        type: "pending order",
        data: { name: orderDetails.name },
      }),
    );
    return res.json({
      order: newOrder,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
}

ordersRouter.get("/", async (req, res) => {
  if (!hasValidToken(req.token)) {
    return res.status(401).json({ error: "Token missing or invalid" });
  }

  const orders = await Order.find({});
  return orders.length > 0
    ? res.json(orders)
    : res.status(404).json({ error: "No orders found" });
});

ordersRouter.post("/price", async (req, res) => {
  const { items, address, shippingMethod } = req.body;

  if (!Array.isArray(items)) {
    return res.status(400).json({ error: `Items are malformed` });
  }

  // Make sure have country and state
  if (!address.country || !address.state) {
    return res.status(400).json({ error: "Missing country or state" });
  }

  const { total, calculateTotalError } = await calculateOrderAmount({
    items,
    address,
    shippingMethod,
  });

  if (calculateTotalError) {
    return res.status(400).json({ error: calculateTotalError });
  }
  return res.json({ amount: { value: total.toFixed(2) } });
});

// Update order post-payment
ordersRouter.post("/", async (req, res) => {
  const event = req.body;
  const id = event.data.object.id;
  const orderToUpdate = await Order.findOne({ orderId: id });
  if (!orderToUpdate) {
    return res.status(400).json({ error: "Invalid order id" });
  }

  // Set paid to true
  orderToUpdate.hasPaid = true;

  // Update inventory
  const { inventoryUpdateError } = await updateInventoryItems(
    orderToUpdate.items,
  );

  try {
    await orderToUpdate.save();
    broadcast(
      JSON.stringify({
        type: "paid order",
        data: { name: orderToUpdate.name },
      }),
    );
    /* const info = await transporter.sendMail({
            from: 'Zircus <erin.danger.burton@gmail.com>',
            to: orderToUpdate.email,
            subject: orderToUpdate.lang === 'fr' ? 'Votre order' : 'Your order',
            text: orderTemplateText(orderToUpdate),
            html: orderTemplate(orderToUpdate),
        }) */
    if (inventoryUpdateError) {
      return res.status(400).json({ error: inventoryUpdateError });
    }
    return res.json({ order: orderToUpdate, status: "COMPLETED" });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});

/* ordersRouter.get('/:id', async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (!order) return res.status(404).json({ error: 'Order not found' })
    return res.send(orderTemplate(order))
}) */

ordersRouter.post("/create-payment-intent", async (req, res) => {
  let formData;
  try {
    formData = formValidator(req.body);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  // Calculate the total for the order
  const { calculateTotalError, shipping, total } = await calculateOrderAmount(
    formData,
  );
  if (calculateTotalError) {
    return res.status(400).json({ error: calculateTotalError });
  }

  // orderDetails for creating a pending order
  const orderDetails = {
    ...formData,
    total,
    shipping,
  };

  switch (orderDetails.paymentMethod) {
    case "stripe":
      return handleStripePayment({
        orderDetails,
        res,
      });
    case "paypal":
      return handlePaypalPayment({ orderDetails, res, amount });
    default:
      return res
        .status(400)
        .json({
          error: `Invalid paymentMethod: ${orderDetails.paymentMethod}`,
        });
  }
});

ordersRouter.post("/cancel-payment-intent", async (req, res) => {
  const { orderId } = req.body;

  try {
    const orderToDelete = await Order.findOne({ orderId });
    if (!orderToDelete) {
      return res
        .status(400)
        .json({ error: `Unable to find order for id: ${orderId}` });
    }
    const result = await stripe.paymentIntents.cancel(orderId);
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

ordersRouter.put("/:id", async (req, res) => {
  if (!hasValidToken(req.token)) {
    return res.status(401).json({ error: "Token missing or invalid" });
  }

  // Requires a json object { updatedAttributes: { ... } }
  await Order.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body.updatedAttributes,
    },
    (err, doc) => {
      if (err) return res.status(500).json({ error: e.message });
      return res.json(doc);
    },
  );
});

ordersRouter.delete("/:id", async (req, res) => {
  if (!hasValidToken(req.token)) {
    return res.status(401).json({ error: "Token missing or invalid" });
  }

  const order = await Order.findById(req.params.id);
  if (!order) return res.json({ error: "Order not found" });

  // Re-add order items to inv stock
  for await (const item of order.items) {
    const itemToUpdate = await Underwear.findOne({ type: item.type });
    itemToUpdate.quantity += item.quantity;
    try {
      await itemToUpdate.save();
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  try {
    await Order.findByIdAndDelete(req.params.id, (err) => {
      if (err) return res.json({ error: err });
      broadcast(
        JSON.stringify({
          type: "deleted order",
          data: { response: "Item deleted" },
        }),
      );
      return res.json({ response: "Item deleted" });
    });
  } catch (e) {
    return res.json({ error: e.message });
  }
});

module.exports = ordersRouter;
