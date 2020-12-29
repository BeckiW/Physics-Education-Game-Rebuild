const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resultSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true
    },
    datetime: {
      type: Date,
      required: true
    },
    topic_id: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Result = mongoose.model("result", resultSchema);

module.exports = Result;
