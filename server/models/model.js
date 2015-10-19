var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  mail: String,
  password : String,
  region : String,
  status : {type: Boolean, default: false },
  created: {type: Date, default: Date.now },
});
