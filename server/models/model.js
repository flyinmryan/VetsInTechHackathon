var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  userName: String,
  name: String,
  email: String,
  password : String,
  phoneNumber: String,
  region : String,
  carModel: String,
  subscriptiontType: String,
  status: {type: Boolean, default: false },
  created: {type: Date, default: Date.now },
});

var driverSchema = new mongoose.Schema({
	userName: String,
	name: String,
	email: String,
	password: String,
	phoneNumber: String,
	status: {type: Boolean, default: false},
	created: {type: Date, default: Date.now}
})
