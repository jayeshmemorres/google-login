const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    trim: true,
  },
  name: {
    type: String,

    trim: true,
  },

  username: {
    type: String,
    require: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,

  },
  company_web: {
    type: String,

  },
  company_profile: {
    type: String,

  },
  company_etcname: {
    type: String,

  },
});

module.exports = mongoose.model("User", userSchema);
