const { checkSchema } = require("express-validator");

exports.userValidation = [
  checkSchema(
    "username",
    "Please enter a name minumum 1 and maximum 20 chars"
  ).isLength({ min: 1, max: 20 }),
  check("email", "Please enter a valid email address").isLength({
    min: 2,
    max: 20
  }),
  check("password", "Password must be between 6 and 200 chars").isLength({
    min: 2,
    max: 200
  })
];
