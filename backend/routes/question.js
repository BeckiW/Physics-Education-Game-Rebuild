const router = require("express").Router();
let Question = require("../models/question_model");

router.route("/questions").get((req, res) => {
  Question.find().then(questions => {
    console.log("questions: ", questions);
    res.json(questions);
  });
});

module.exports = router;
