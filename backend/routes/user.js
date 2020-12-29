const router = require("express").Router();
let User = require("../models/user_model");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/user").post((req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).json({
      created: false,
      error: "You must provide a username, email and password."
    });
    return;
  }

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password)
  });
  newUser
    .save()
    .then(() => {
      res.status(201).json({ created: true });
    })
    .catch(err => {
      res.status(400).json({ created: false, error: err });
    });
});

module.exports = router;
