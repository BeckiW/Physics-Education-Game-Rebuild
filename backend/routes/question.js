const router = require("express").Router();
let Question = require("../models/question_model");

router.post(
  "/add",
  checkSchema(topicSchema.newQuestionValidation),
  topicController.addQuestion
);

router.get("/all", topicController.allQuestions);

router.get(
  "/question/:questionId",
  checkSchema(topicSchema.questionValidation),
  topicController.question
);

router.delete(
  "/question/:questionId",
  checkSchema(topicSchema.questionValidation),
  topicController.delete
);

router.put(
  "/question/:questionId",
  checkSchema(topicSchema.questionValidation),
  topicController.update
);

module.exports = router;
