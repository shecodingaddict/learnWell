const express = require("express");
const router = express.Router();
const question = require("../db/question");

router.get("/", (req, res, next) => {
  res.send("Hello World! From Questiions");
});

router.post("/save", (req, res, next) => {
  question().then(() => {
    res.send("Hello World! From Questiions");
  });
});

module.exports = router;
