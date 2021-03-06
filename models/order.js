const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const orderSchema = new mongoose.Schema({
  preferredLanguage: {
    type: String,
    default: "en",
  },
  items: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  address: {
    line1: {
      type: String,
      required: true,
    },
    line2: String,
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  hasPaid: {
    type: Boolean,
    required: true,
  },
  hasShipped: {
    type: Boolean,
    required: true,
  },
  shipping: {
    method: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    shipment: {
      type: Object,
      default: null,
    },
  },
  breakdown: {
    subtotal: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    shipping: {
      type: Number,
      required: true,
    },
  },
  clientSecret: {
    type: String,
  },
  capture: {
    status: String,
    id: String,
  },
  createdOn: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  identifier: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
  },
});

orderSchema.plugin(uniqueValidator);
orderSchema.set("toJSON", {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Order", orderSchema);
