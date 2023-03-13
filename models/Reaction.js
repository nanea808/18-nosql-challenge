// import model and Schema from mongoose
const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: { type: Types.ObjectId, default: new Types.ObjectId() },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: { type: String, reqired: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = reactionSchema;
