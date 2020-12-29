const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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

const resultRouter = require("./routes/result");
const questionRouter = require("./routes/question");
const userRouter = require("./routes/user");
const topicRouter = require("./routes/topic");

app.use("/results", resultRouter);
app.use("/user", userRouter);
app.use("/questions", questionRouter);
app.use("/topics", topicRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
