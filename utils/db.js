const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting with mongo");
      process.exit(1);
    });
};
