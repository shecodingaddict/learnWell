const express = require("express");
const app = express();
const connectDb = require("./utils/db");
const adminRoute = require("./routes/admin");
const questionRoute = require("./routes/question");

app.get("/", function (req, res, next) {
  res.send("Hello World");
});

app.use("/admin", adminRoute);

app.use("/question", questionRoute);

connectDb();

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  } else console.log("App listening on http://localhost:8000");
});
