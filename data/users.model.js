var mongoose = require('mongoose');

var emailSchema = new mongoose.Schema({
	type : { type : String },
	value : String

});

var userSchema = new mongoose.Schema({
	name : String,	
	password : String,
	level : Number,
	emails : [emailSchema]
});

mongoose.model('User', userSchema, 'users');
