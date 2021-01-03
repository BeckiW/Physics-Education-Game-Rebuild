const Question = require("../models/question_model");
const { validationResult } = require("express-validator");

exports.addSession = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  try {
    const { userId, questions, answers } = req.body;

    //save session
    const newSession = new Question({
      userId: userId,
      questions: questions,
      answers: answers
    });

    const addedSession = await newSession.save({ created: true });
    res.status(201).json(addedSession);
  } catch (err) {
    console.log(err);

    res.status(400).json({ created: false, error: err });
  }
};

exports.sessions = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  let size = parseInt(req.query.size) || 10;

  try {
    const sessions = await Session.find().limit(size);
    res.status(200).json(sessions);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

exports.session = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  if (!req.params && !req.params.sessionId) {
    res.status(400).json({ errors: "no sessionId provided" });
  }

  let sessionId = req.params.sessionId;

  try {
    const session = await Session.find({
      _id: sessionId
    });
    res.status(200).json(session);
  } catch (err) {
    res.status(400).json(`Error: Can't find user with ID ${sessionId}`);
  }
};

exports.delete = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  if (!req.params && !req.params.sessionId) {
    res.status(400).json({ errors: "no sessionId provided" });
  }

  let sessionId = req.params.sessionId;

  try {
    const session = await Session.remove({
      _id: sessionId
    });
    res.status(200).json(session);
  } catch (err) {
    res.status(400).json(`Error: Can't find user with ID ${sessionId}`);
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
    //question exist check
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
