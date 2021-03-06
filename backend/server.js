const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const session = require("express-session");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false
  })
);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const userRouter = require("./routes/user");
const topicRouter = require("./routes/topic");
const questionRouter = require("./routes/question");
const resultRouter = require("./routes/result");
const sessionRouter = require("./routes/sessions");

app.use("/users", userRouter);
app.use("/topics", topicRouter);
app.use("/questions", questionRouter);
app.use("/results", resultRouter);
app.use("/sessions", sessionRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
