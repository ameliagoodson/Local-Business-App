const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Compile model from Schema
//1st arg: The name of the collection that WILL be created for your model
//2nd arg: the schema you want to use in creating the model
const User = mongoose.model("users", UserSchema);

module.exports = User;

// module.exports = User = mongoose.model("users", UserSchema);
