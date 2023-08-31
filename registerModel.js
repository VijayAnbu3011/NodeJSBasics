const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let RegisterSchema = new Schema({
  fname: {
    type: String,
    minLength: 3,
  },
  lname: {
    type: String,
    minLength: 1,
  },
  email: {
    type: String,
    minLength: 5,
  },
  password: {
    type: String,
    minLength: 6,
  },
});

module.exports = mongoose.model("registerData", RegisterSchema);
