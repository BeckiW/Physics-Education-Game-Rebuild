const express = require("express");
const router = express.Router();
let User = require("../models/user_model");
const UserController = require("../controllers/UserController");
const userSchema = require("../schemas/user");
const userController = require("../controllers/users");

router.post("/addUser", userSchema.userValidation, userController.addUser);

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
