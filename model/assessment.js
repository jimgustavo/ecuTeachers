const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Assessment = new Schema({
  theme: { type: String, required: true },
  topic: { type: String, required: true },
  title: { type: String, unique: true, required: true },
  passage: { type: String, required: true },
  quizQuestions: [
    {
      question: { type: String },
      answers: [
        {
          type: { type: String },
          content: { type: String }
        }
      ]
    }
  ],
  image: [String],
  date: { type: Date, default: Date.now }
});

module.exports = Passage = mongoose.model("assessment", Assessment);
//will create a model called item following the ItemSchema
