const Question = require("../models/question");

async function createQuestion() {
  const question = new Question({
    questionId: 2,
    createdBy: "Princi",
    question: "What is the best programming language in the world?",
  });
  await question.save();
  console.log("Question Saved");
}

module.exports = createQuestion;
