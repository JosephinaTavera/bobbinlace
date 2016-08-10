var mongoose = require('mongoose');
var topicSchema = require('./topic.js').schema

var userSchema = mongoose.Schema({
	username: String,
	password: String,
	topic: [topicSchema]
}); 

var User = mongoose.model('User', userSchema);

module.exports = User;