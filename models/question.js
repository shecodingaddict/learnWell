const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  questionId: {
    type: Number,
    required: true,
    unique: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  questionType: { //Single select, Multi select //Todo: Add an Enum
    type: String,
    required: true,
  },
  options: {
    type: Map,
    of: String,
    required: true,
  },
  answer: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Question", questionSchema);
