const router = require("express").Router();
let Result = require("../models/result_model");

router.route("/").get((req, res) => {
  Result.find()
    .then(results => res.json(results))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/results").post((req, res) => {
  checkAuth(req, res, user => {
    const result = new Result({
      user_id: user._id,
      datetime: new Date(),
      topic_id: req.body.topic_id,
      score: req.body.score
    });

    result
      .save()
      .then(() => {
        res.status(201).send(JSON.stringify({ success: true }));
      })
      .catch(err => {
        res.status(400).send(err);
      });
  });
});

module.exports = router;
