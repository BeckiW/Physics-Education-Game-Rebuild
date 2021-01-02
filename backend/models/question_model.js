const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    topicId: {
      type: String,
      required: true
    },
    difficulty: {
      type: Number,
      required: true
    },
    questionText: {
      type: String,
      required: true
    },
    answers: {
      type: Array,
      required: true
    },
    correctAnswer: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Question = mongoose.model("question", questionSchema);

module.exports = Question;
