const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
    // Todo: default: false, and mark true after validation
  },
});

module.exports = mongoose.model("User", userSchema);
