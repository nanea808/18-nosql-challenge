// import mongoose schema and model (also any models needed for population)
const { Schema, model } = require("mongoose");
const { Thought } = require("../models");

// Schema
const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true /* Needs Validator */ },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual properties
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});
// Initialize the model
const User = model('user', userSchema);

// export the model
module.exports = User;
