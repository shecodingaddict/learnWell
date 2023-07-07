const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hello World, From Admin"); //Add admin APIs
});

module.exports = router;
