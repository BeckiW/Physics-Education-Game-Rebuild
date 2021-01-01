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
  "/all",
  checkSchema(userSchema.userValidation),
  userController.users
);
router.get("/user/:userId", userController.user);

//fix me
router.delete("/user/:userId", userController.delete);

module.exports = router;
