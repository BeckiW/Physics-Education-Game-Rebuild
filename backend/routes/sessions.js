const router = require("express").Router();
const sessionSchema = require("../schemas/session");
const sessionController = require("../controllers/sessions");
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
  checkSchema(sessionSchema.sessionValidation),
  sessionController.update
);

module.exports = router;
