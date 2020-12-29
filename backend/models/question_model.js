const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    topic_id: {
      type: String,
      required: true
    },
    difficulty: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    answers: {
      type: Array,
      required: true
    },
    correct_answer: {
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
