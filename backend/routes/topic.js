const router = require("express").Router();
let Topic = require("../models/topic_model");

router.route("/topics").get((req, res) => {
  Topic.find().then(topics => {
    console.log("topics: ", topics);
    res.json(topics);
  });
});

module.exports = router;
