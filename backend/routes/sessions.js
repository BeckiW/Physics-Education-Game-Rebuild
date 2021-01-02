const router = require("express").Router();
const topicSchema = require("../schemas/topic");
const topicController = require("../controllers/topics");
const { checkSchema } = require("express-validator");

router.post(
  "/new",
  checkSchema(topicSchema.newTopicValidation),
  topicController.addTopic
);

router.get(
  "/all",
  checkSchema(topicSchema.newTopicValidation),
  topicController.topics
);

router.get(
  "/session/:sessionId",
  checkSchema(topicSchema.newTopicValidation),
  topicController.topic
);

router.delete(
  "/session/:sessionId",
  checkSchema(topicSchema.newTopicValidation),
  topicController.delete
);

router.put(
  "/session/:sessionId",
  checkSchema(topicSchema.newTopicValidation),
  topicController.update
);

module.exports = router;
