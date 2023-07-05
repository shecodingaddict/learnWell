const express = require("express");
const router = express.Router();
const questionCollection = require("../db/question");
const Question = require("../models/question");

router.get("/", (req, res, next) => {
  res.send("Hello World! From Questiions");
});

/*
  Sample Question Save Request
  {
    "questionId": 1,
    "createdBy": "Princi Vershwal",
    "question": "What is Akshay's Favourite Programming Language?",
    "questionType": "Single select"
    "options": {
      "A": "Python",
      "B": "JavaScript",
      "C": "Java",
      "D": "C++",
    },
    "answer": "B"
  }
*/
router.post("/save", (req, res, next) => {
  try {
    console.log(req.body);
    const { questionId, createdBy, question, options, answer, questionType} = req.body;
    const newQuestion = new Question({
      questionId: questionId,
      createdBy: createdBy,
      questionType: questionType,
      question: question,
      options: options,
      answer: answer,
    });
    questionCollection.createQuestion(newQuestion).then(() => {
      res.status(200).send("Question saved successfully");
    });
  } catch (err) {
    res.status(200).send("Error in saving the question", err.message);
  }
});

router.post("/submit", (req, res, next) => {
  try {
    console.log(req.body);
    const {questionId, userId, answer} = req.body;
    // const newQuestion = new Question({
    //   questionId: questionId,
    //   createdBy: createdBy,
    //   questionType: questionType,
    //   question: question,
    //   options: options,
    //   answer: answer,
    // });
    // questionCollection.createQuestion(newQuestion).then(() => {
    //   res.status(200).send("Question saved successfully");
    // });
  } catch (err) {
    res.status(200).send("Error in saving the question", err.message);
  }
});

module.exports = router;
