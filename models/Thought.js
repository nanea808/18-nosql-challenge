// import mongoose schema and model (also any models needed for population)
const { Schema, model } = require("mongoose");
const dayjs = require('dayjs'); 
// const {  } = require("../models");

// Schema
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, reqired: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now },
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

// Initialize the model
const Thought = model('thought', thoughtSchema);

// export the model
module.exports = Thought;
