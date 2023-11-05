const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: null,
  },
  desc: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  location: {
    type: String,
    default: null,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  followers: [],
  following: [],
});

module.exports = mongoose.model("User", UserSchema);
