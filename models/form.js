//Requiring mongoose package
var mongoose = require("mongoose");

// Schema
var formSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
  password: String,
  collegeName: String,
  gender: String,
});

module.exports = mongoose.model("Form", formSchema);
