const formValidator = require("../utils/formValidator.js");
const chai = require("chai");
const { assert } = chai;
const { genValidFormData } = require("./testFormData.js");

chai.should();

describe("Test Form Validation", () => {
  let formData;

  beforeEach(() => {
    formData = genValidFormData();
  });

  describe("Validation succeeds for valid formData", () => {
    it("Should return validated form data", done => {
      assert.deepEqual(formValidator(formData), formData);
      done();
    });
  });

  describe("Validation fails for formData with invalid name", () => {
    it("Should throw an error with a blank name in formData", done => {
      formData.name = "";
      assert.throws(() => formValidator(formData), TypeError);
      done();
    });
  });

  describe("Validation fails for formData with invalid email", () => {
    it("Should throw an error with an invalid email address", done => {
      formData.email = "helloworld.com";
      assert.throws(() => formValidator(formData), TypeError);
      done();
    });
  });

  describe("Validation fails for formData with missing email", () => {
    it("Should throw an error with a blank email", done => {
      formData.email = "";
      assert.throw(() => formValidator(formData), TypeError);
      done();
    });
  });

  describe("Validation fails for formData with invalid phone number", () => {
    it("Should throw an error if the phone number is invalid", done => {
      formData.phone = "12345678901";
      assert.throw(() => formValidator(formData), TypeError);
      done();
    });
  });

  describe("Validation fails for formData with missing phone number", () => {
    it("Should throw an error if the phone number is blank", done => {
      formData.phone = "";
      assert.throw(() => formValidator(formData), TypeError);
      done();
    });
  });

  describe("Valaidation fails for formData with invalid country", () => {
    it("Should throw an error if the country is not United States or Canada", done => {
      formData.address.country = "Germany";
      assert.throw(() => formValidator(formData), TypeError);
      done();
    });
  });

  describe("Validation fails for Canadian postal Code if Country is not Canada", () => {
    it("Should throw an error if the country does not match the postal code", done => {
      formData.address.state = "Indiana";
      formData.address.country = "United States";
      assert.throw(
        () => formValidator(formData),
        TypeError,
        `Invalid entry postalCode: ${formData.address.postalCode} in address`
      );
      done();
    });
  });

  describe("Validation fails for United States zip code if country is not United State", () => {
    it("Should throw an error if the country does not match the postal code", done => {
      formData.address.postalCode = "90006";
      assert.throw(
        () => formValidator(formData),
        TypeError,
        "Invalid entry postalCode: 90006 in address"
      );
      done();
    });
  });

  describe("Validation fails for invalid US state for Canada", () => {
    it("Should throw an error if the state does not belong to the country", done => {
      formData.address.state = "Indiana";
      assert.throw(
        () => formValidator(formData),
        TypeError,
        "Invalid entry state: Indiana in address"
      );
      done();
    });
  });

  describe("Validation fails for invalid Canadian province for United States", () => {
    it("Should throw an error if the state does not belong to the country", done => {
      formData.address.country = "United States";
      assert.throw(
        () => formValidator(formData),
        TypeError,
        "Invalid entry state: British Columbia in address"
      );
      done();
    });
  });

  describe("Validation fails for invalid payment method", () => {
    it("Should throw an error if the payment method is not 'paypal' or 'stripe'", done => {
      formData.paymentMethod = "cats";
      assert.throw(
        () => formValidator(formData),
        TypeError,
        "Invalid entry paymentMethod: cats in formData"
      );
      done();
    });
  });

  describe("Validation succeeds for valid payment method", () => {
    it("Should return validated formData", done => {
      formData.paymentMethod = "paypal"; // we already tested stripe in first test
      assert.deepEqual(formValidator(formData), formData);
      done();
    });
  });

  describe("Validation fails for invalid items", () => {
    it("Should throw an error if an item's quantity is zero", done => {
      formData.items = [{ type: "ff-yellow-sm", quantity: 0 }];
      assert.throw(() => formValidator(formData), TypeError);
      done();
    });
  });

  describe("Validation fails for invalid items", () => {
    it("Should throw an error if an item is not a valid type", done => {
      formData.items = [{ type: "cats", quantity: 69 }];
      assert.throw(() => formValidator(formData), TypeError);
      done();
    });
  });
});
