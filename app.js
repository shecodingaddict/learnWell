const express = require("express");
const app = express();
const connectDb = require("./utils/db");
const adminRoute = require("./routes/admin");
const questionRoute = require("./routes/question");
const userRoute = require("./routes/user");

// app.get("/", function (req, res, next) {
//   res.send("Hello World");
// });

app.use(express.json());

app.use("/admin", adminRoute);

app.use("/question", questionRoute);

app.use("/user", userRoute);

connectDb();

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  } else console.log("App listening on http://localhost:8000");
});
