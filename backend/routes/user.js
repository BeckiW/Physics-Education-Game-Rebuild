const express = require("express");
const router = express.Router();
const userSchema = require("../schemas/user");
const userController = require("../controllers/users");
const { checkSchema } = require("express-validator");

router.post(
  "/add",
  checkSchema(userSchema.newUserValidation),
  userController.addUser
);
router.get(
  "/user",
  checkSchema(userSchema.userValidation),
  userController.user
);

module.exports = router;
