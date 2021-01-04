const Question = require("../models/question_model");
const { validationResult } = require("express-validator");

exports.addResult = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  try {
    const { userId, questions, answers } = req.body;

    //save session
    const newResult = new Result({
      userId: userId,
      questions: questions,
      answers: answers
    });

    const addedResult = await newResult.save({ created: true });
    res.status(201).json(addedResult);
  } catch (err) {
    console.log(err);

    res.status(400).json({ created: false, error: err });
  }
};

exports.results = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  let size = parseInt(req.query.size) || 10;

  try {
    const results = await Result.find().limit(size);
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

exports.result = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  if (!req.params && !req.params.sessionId) {
    res.status(400).json({ errors: "no resultId provided" });
  }

  let resultId = req.params.resultId;

  try {
    const result = await Result.find({
      _id: resultId
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(`Error: Can't find user with ID ${resultId}`);
  }
};

exports.delete = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  if (!req.params && !req.params.resultId) {
    res.status(400).json({ errors: "no resultId provided" });
  }

  let resultId = req.params.resultId;

  try {
    const result = await Result.remove({
      _id: resultId
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(`Error: Can't find user with ID ${resultId}`);
  }
};

exports.update = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  try {
    //session exist check
    const existingSession = await Session.find({
      _id: req.params.sessionId
    });

    if (existingSession.length > 0) {
      console.log(req.body);
      const updateSession = await Session.findOneAndUpdate(
        { _id: req.params.sessionId },
        req.body
      );
      res.status(201).json(updateSession);
    } else {
      res
        .status(400)
        .json({ created: false, error: "session couldn't be found" });
    }
  } catch (err) {
    console.log(err);

    res.status(400).json({ created: false, error: err });
  }
};
