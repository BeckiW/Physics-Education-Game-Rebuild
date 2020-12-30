const mongoose = require("mongoose");
const uuid = require("uuid-v4");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    accessToken: {
      type: String,
      default: () => uuid()
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
