// import mongoose schema and model (also any models needed for population)
const { Schema, model } = require("mongoose");
const Thought = require("./Thought");

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

// const newUser = new User({
//   username: "alex",
//   email: "this.email@gmail.com",
// });

// console.log(newUser);

// export the model
module.exports = User;
