const Question = require("../models/question");

function createQuestion(newQuestion) {
  newQuestion
    .save()
    .then(() => {
      console.log("Question Saved");
    })
    .catch((err) => {
      throw err;
    });
}

function findQuestion() {
  console.log("Find Question");
}

module.exports = {
  createQuestion,
  findQuestion,
};
