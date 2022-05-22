const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema(
  {
    punchline: {
      type: String,
      required: [true, "Punchline is required"],
      minlength: [3, "Punchline must be at least 3 characters"],
    },
    jokesetup: {
      type: String,
      required: [true, "Setup is required"],
      minlength: [10, "Setup must be at least 10 characters"],
    },
  },
  { timestamp: true }
);

module.exports.Jokes = mongoose.model("JokesSchema", JokesSchema);
