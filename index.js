const express = require("express");
const cors = require("cors");
const { todoRouter } = require("./routes/todo.route");
const { userRouter } = require("./routes/user.route");
const { authentication } = require("./middleware/authentication");
const { connection } = require("./config/db");
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRouter);
app.use(authentication);
app.use("/todos", todoRouter);

app.listen(port, () => {
  try {
    connection;
    console.log("connected db successfully");
  }
  catch (err) {
    console.log("error to connect");
    console.log(err);
  }
  console.log("server is running...");
});
