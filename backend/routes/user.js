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
router.get("/all", userController.users);
router.get(
  "/user/:userId",
  checkSchema(userSchema.userValidation),
  userController.user
);
router.delete("/user/:userId", userController.delete);
router.put(
  "/user/:userId",
  checkSchema(userSchema.userValidation),
  userController.update
);

module.exports = router;
