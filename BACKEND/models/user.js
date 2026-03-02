const mongoose = require("mongoose");

const savedBookSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  seller: String,
  location: String
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  },

  savedBooks: [savedBookSchema]

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);