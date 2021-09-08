const genValidFormData = () => ({
  name: "John Smith",
  email: "js@email.com",
  phone: "665 506 5948",
  address: {
    line1: "123 Fake St",
    line2: "",
    city: "Example",
    state: "British Columbia",
    country: "Canada",
    postalCode: "V1S 3H4",
  },
  shipping: {
    method: "DOM.XP",
    total: 24.54,
  },
  paymentMethod: "stripe",
  items: [
    {
      type: "ff-yellow-sm",
      quantity: 5,
    },
  ],
});

module.exports = {
  genValidFormData,
};
