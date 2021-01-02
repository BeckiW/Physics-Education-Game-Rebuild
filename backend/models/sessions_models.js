const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sessionSchema = new Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: true
    },
    questions: {
      type: Array,
      unique: true,
      required: true
    },
    answers: {
      type: Array,
      required: true,
      minlength: 8
    }
  },
  {
    timestamps: true
  }
);

const Session = mongoose.model("session", sessionSchema);

module.exports = Session;
