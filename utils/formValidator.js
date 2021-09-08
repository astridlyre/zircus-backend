const countries = require("./countries.js");
const { isValidType } = require("./middleware.js");
const { USA_CODES, DOMESTIC_CODES } = require("../xml/cp.js");

const CANADA_POSTAL_CODE = /^[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]$/;
const US_ZIP_CODE = /^[0-9]{5}(-[0-9]{4})?$/;
const EMAIL_REGEXP =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validatePhoneNumber({ phone }) {
  return /^[0-9]{3} [0-9]{3} [0-9]{4}$/.test(phone);
}

function validateName({ name }) {
  return name.length > 0;
}

function validateEmail({ email }) {
  return EMAIL_REGEXP.test(email) && email.length < 254;
}

function validateCountry({ country }) {
  return country === "Canada" || country === "United States";
}

function validateState({ country, state }) {
  return countries[country]?.states.find(s => s.name === state) ?? false;
}

function validatePaymentMethod({ paymentMethod }) {
  return paymentMethod === "paypal" || paymentMethod === "stripe";
}

function validatePostalCode({ country, postalCode }) {
  return country === "Canada"
    ? CANADA_POSTAL_CODE.test(postalCode)
    : US_ZIP_CODE.test(postalCode);
}

function validateShippingMethod({ shipping, address }) {
  return address.country === "Canada"
    ? DOMESTIC_CODES.has(shipping.method)
    : USA_CODES.has(shipping.method);
}

function validateItems({ items }) {
  return (
    Array.isArray(items) &&
    items.every(item => isValidType(item.type)) &&
    items.every(item => item.quantity > 0)
  );
}

const validators = {
  name: validateName,
  email: validateEmail,
  phone: validatePhoneNumber,
  country: validateCountry,
  state: validateState,
  postalCode: validatePostalCode,
  shipping: validateShippingMethod,
  paymentMethod: validatePaymentMethod,
  items: validateItems,
};

module.exports = formData => {
  Object.entries(formData).forEach(([key, entry]) => {
    if (key === "address") {
      Object.entries(entry).forEach(([addressKey, addressEntry]) => {
        if (
          validators[addressKey] &&
          !validators[addressKey](formData.address)
        ) {
          throw new TypeError(
            `Invalid entry ${addressKey}: ${addressEntry} in address`
          );
        }
      });
    } else {
      if (validators[key] && !validators[key](formData)) {
        throw new TypeError(`Invalid entry ${key}: ${entry} in formData`);
      }
    }
  });
  return formData;
};
