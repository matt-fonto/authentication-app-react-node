const mongoose = require("mongoose");

// schema: blueprint for the data
const userSchema = new mongoose.Schema(
  {
    // property
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: "user-data",
  }
);

// model: a class with which we construct documents
const model = mongoose.model("UserModel", userSchema);

module.exports = model;
