// import mongoose schema and model (also any models needed for population)
const { Schema, model } = require("mongoose");
// const {  } = require("../models");

// Schema
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: []
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

// Virtual properties
thoughtSchema.virtual('reactionCount').get(function () {
  return
});
// Initialize the model
const Thought = model('thought', thoughtSchema);

// export the model
module.exports = Thought;
