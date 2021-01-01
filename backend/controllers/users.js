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

exports.users = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  let size = parseInt(req.query.size) || 10;

  try {
    const users = await User.find().limit(size);
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

exports.user = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  if (!req.params && !req.params.userId) {
    res.status(400).json({ errors: "no userId provided" });
  }

  console.log(req.params);
  let userId = req.params.userId;

  try {
    const users = await User.find({
      _id: userId
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(`Error: Can't find user with ID ${userId}`);
  }
};

exports.delete = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  if (!req.params && !req.params.userId) {
    res.status(400).json({ errors: "no userId provided" });
  }

  let userId = req.params.userId;

  console.log(userId);

  try {
    const user = await User.remove({
      _id: userId
    });
    res.status(200).json(`User ${userId} deleted`);
  } catch (err) {
    res.status(400).json(`Error: Can't find user with ID ${userId}`);
  }
};
