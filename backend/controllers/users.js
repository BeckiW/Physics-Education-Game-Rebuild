const User = require("../models/user_model");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt-nodejs");

exports.addUser = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  try {
    const { username, email, password } = req.body;

    //user exist check
    const existUser = await User.findOne({
      username: username,
      email: email
    });
    if (existUser) {
      res.status(400).json({ created: false, error: "user already exists" });
    }

    //save user
    const user = new User({
      username: username,
      email: email,
      password: bcrypt.hashSync(password)
    });

    const addedUser = await user.save({ created: true });
    res.status(201).json(addedUser);
  } catch (err) {
    console.log(err);

    res.status(400).json({ created: false, error: err });
  }
};

exports.user = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};
