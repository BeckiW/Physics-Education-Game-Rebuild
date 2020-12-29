const User = require("../models/User");
const { validationResult, check } = require("express-validator");
const checkError = require("../helper/checkError");

exports.addUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //user exist check
    const existUser = await User.findOne({
      username: username,
      email: email
    });
    checkError(res, existUser, "User already exists");

    //save user
    const user = new User({
      username: username,
      email: email,
      password: bcrypt.hashSync(password)
    });

    const addedUser = await user.save({ created: true });
    res.status(201).json(addedUser);
  } catch (err) {
    res.status(400).json({ created: false, error: err });
  }
};

//FINISH ME!
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find({}).where("status", /[^deleted]/);
//     res.status(200).json(users);
//   } catch (err) {
//     checkError(res, err, err.message, 500);
//   }
// };

// exports.deleteUser = async (req, res) => {
//   try {
//     await User.deleteOne({ _id: req.params.id });

//     res.status(200).send("Data is deleted");
//   } catch (err) {
//     checkError(res, err, err.message, 500);
//   }
// };
