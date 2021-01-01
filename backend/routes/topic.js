const router = require("express").Router();
const topicSchema = require("../schemas/topic");
const topicController = require("../controllers/topics");
const { checkSchema } = require("express-validator");

router.post(
  "/add",
  checkSchema(topicSchema.newTopicValidation),
  topicController.addTopic
);

router.get(
  "/all",
  checkSchema(topicSchema.newTopicValidation),
  topicController.topics
);

router.get(
  "/topic/:topicId",
  checkSchema(topicSchema.newTopicValidation),
  topicController.topic
);

router.delete(
  "/topic/:topicId",
  checkSchema(topicSchema.newTopicValidation),
  topicController.delete
);

router.put(
  "/topic/:topicId",
  checkSchema(topicSchema.newTopicValidation),
  topicController.update
);

module.exports = router;
