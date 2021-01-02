const Topic = require("../models/topic_model");
const { validationResult } = require("express-validator");

exports.addTopic = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  try {
    const { topic, level, description } = req.body;
    //user exist check
    const existTopic = await User.findOne({
      topic: topic,
      level: level
    });
    if (existTopic) {
      res.status(400).json({ created: false, error: "topic already exists" });
    }

    //save user
    const newTopic = new Topic({
      topic: topic,
      level: level,
      description: description
    });

    const addedTopic = await newTopic.save({ created: true });
    res.status(201).json(addedTopic);
  } catch (err) {
    console.log(err);

    res.status(400).json({ created: false, error: err });
  }
};

exports.topics = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  let size = parseInt(req.query.size) || 10;

  try {
    const topics = await Topic.find().limit(size);
    res.status(200).json(topics);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

exports.topic = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  if (!req.params && !req.params.topicId) {
    res.status(400).json({ errors: "no topicId provided" });
  }

  let topicId = req.params.topicId;

  try {
    const topic = await Topic.find({
      _id: topicId
    });
    res.status(200).json(topic);
  } catch (err) {
    res.status(400).json(`Error: Can't find topic with ID ${topicId}`);
  }
};

exports.delete = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result);
    res.status(400).json({ errors: result.errors });
    return;
  }

  if (!req.params && !req.params.topicId) {
    res.status(400).json({ errors: "no topicId provided" });
  }

  let topicId = req.params.topicId;

  try {
    const topic = await Topic.remove({
      _id: topicId
    });
    res.status(200).json(topic);
  } catch (err) {
    res.status(400).json(`Error: Can't find topic with ID ${topicId}`);
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
    //topic exist check
    const existingTopic = await Topic.find({
      _id: req.params.topicId
    });

    if (existingTopic.length > 0) {
      console.log(req.body);
      const updateTopic = await Topic.findOneAndUpdate(
        { _id: req.params.topicId },
        req.body
      );
      res.status(201).json(updateTopic);
    } else {
      res
        .status(400)
        .json({ created: false, error: "topic couldn't be found" });
    }
  } catch (err) {
    console.log(err);

    res.status(400).json({ created: false, error: err });
  }
};
