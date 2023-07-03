const express = require("express");
const app = express();
const connectDb = require("./utils/db");

connectDb();

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  } else console.log("App listening on http://localhost:8000");
});
