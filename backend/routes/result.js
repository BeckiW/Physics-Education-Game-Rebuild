const router = require("express").Router();
const resultsSchema = require("../schemas/result");
const resultController = require("../controllers/results");
const { checkSchema } = require("express-validator");

router.post(
  "/new",
  checkSchema(resultsSchema.newResultValidation),
  resultController.addResult
);

router.get("/all", resultController.results);

router.get(
  "/session/:resultId",
  checkSchema(resultsSchema.resultValidation),
  resultController.result
);

router.delete(
  "/session/:resultId",
  checkSchema(resultsSchema.resultValidation),
  resultController.delete
);

router.put(
  "/session/:resultId",
  checkSchema(resultsSchema.resultValidation),
  resultController.update
);

module.exports = router;
