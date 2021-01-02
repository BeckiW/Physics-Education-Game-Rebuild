const router = require("express").Router();
const topicSchema = require("../schemas/topic");
const topicController = require("../controllers/topics");
const { checkSchema } = require("express-validator");

router.post(
  "/new",
  checkSchema(sessionSchema.newSessionValidation),
  sessionController.addSession
);

router.get("/all", sessionController.sessions);

router.get(
  "/session/:sessionId",
  checkSchema(sessionSchema.sessionValidation),
  sessionController.session
);

router.delete(
  "/session/:sessionId",
  checkSchema(sessionSchema.sessionValidation),
  sessionController.delete
);

router.put(
  "/session/:sessionId",
  checkSchema(sessionSchema.newTopicValidation),
  sessionController.update
);

module.exports = router;
