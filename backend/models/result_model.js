const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resultSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  datetime: {
    type: Date,
    required: true
  },
  topicId: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});

const Result = mongoose.model("result", resultSchema);

module.exports = Result;
