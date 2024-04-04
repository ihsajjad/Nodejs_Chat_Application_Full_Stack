const mongoose = require("mongoose");

const People = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    emial: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    avater: { type: String },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  { timestamps: true }
);

const people = mongoose.model("User", People);
module.exports = people;
