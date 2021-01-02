const Question = require("../models/question_model");
const { validationResult } = require("express-validator");

exports.addQuestion = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  try {
    const {
      topicId,
      questionText,
      difficulty,
      answers,
      correctAnswer
    } = req.body;
    //user exist check
    const existQuestion = await Question.findOne({
      questionText: questionText,
      correctAnswer: correctAnswer
    });
    if (existQuestion) {
      res.status(400).json({ created: false, error: "topic already exists" });
    }

    //save user
    const newQuestion = new Question({
      topicId: topicId,
      difficulty: difficulty,
      questionText: questionText,
      correctAnswer: correctAnswer,
      answers: answers
    });

    const addedQuestion = await newQuestion.save({ created: true });
    res.status(201).json(addedQuestion);
  } catch (err) {
    console.log(err);

    res.status(400).json({ created: false, error: err });
  }
};

exports.questions = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  let size = parseInt(req.query.size) || 10;

  try {
    const questions = await Question.find().limit(size);
    res.status(200).json(questions);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

exports.question = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  if (!req.params && !req.params.topicId) {
    res.status(400).json({ errors: "no topicId provided" });
  }

  let questionId = req.params.questionId;

  try {
    const question = await Question.find({
      _id: questionId
    });
    res.status(200).json(question);
  } catch (err) {
    res.status(400).json(`Error: Can't find user with ID ${questionId}`);
  }
};

exports.delete = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  if (!req.params && !req.params.questionId) {
    res.status(400).json({ errors: "no questionId provided" });
  }

  let questionId = req.params.questionId;

  try {
    const question = await Question.remove({
      _id: questionId
    });
    res.status(200).json(question);
  } catch (err) {
    res.status(400).json(`Error: Can't find user with ID ${questionId}`);
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
    //uquestion exist check
    const existingQuestion = await Question.find({
      _id: req.params.questionId
    });

    if (existingQuestion.length > 0) {
      console.log(req.body);
      const updateQuestion = await Question.findOneAndUpdate(
        { _id: req.params.questionId },
        req.body
      );
      res.status(201).json(updateQuestion);
    } else {
      res
        .status(400)
        .json({ created: false, error: "question couldn't be found" });
    }
  } catch (err) {
    console.log(err);

    res.status(400).json({ created: false, error: err });
  }
};
