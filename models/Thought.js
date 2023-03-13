// import mongoose schema and model (also any models needed for population)
const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
// const dayjs = require('dayjs');

// Schema
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual properties
thoughtSchema.virtual("reactionCount").get(function () {
  return;
});
// Initialize the model
const Thought = model("thought", thoughtSchema);

// const newThought = new Thought({
//   thoughtText: "This is my thought text.",
//   username: "Mandy",
//   reactions: {
//     reactionBody: "This is the reaction body.",
//     username: "Sydney"
//   }
// });

// console.log(newThought);

// export the model
module.exports = Thought;
