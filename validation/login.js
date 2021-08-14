const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(input) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
input.name = !isEmpty(input.name) ? input.name : "";
input.email = !isEmpty(input.email) ? input.email : "";
input.password = !isEmpty(input.password) ? input.password : "";
input.password2 = !isEmpty(input.password2) ? input.password2 : "";
// Name checks
  if (Validator.isEmpty(input.name)) {
    errors.name = "Name field is required";
  }
// Email checks
  if (Validator.isEmpty(input.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(input.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(input.password)) {
    errors.password = "Password field is required";
  }
if (Validator.isEmpty(input.password2)) {
    errors.password2 = "Confirm password field is required";
  }
if (!Validator.isLength(input.password, { min: 8, max: 20 })) {
    errors.password = "Password must be at least 8 characters";
  }
if (!Validator.equals(input.password, input.password2)) {
    errors.password2 = "Passwords must match";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};