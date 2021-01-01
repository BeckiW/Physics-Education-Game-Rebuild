const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const topicSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

const Topic = mongoose.model("topic", topicSchema);

module.exports = Topic;
