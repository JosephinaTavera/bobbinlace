var mongoose = require('mongoose'); 
var commentSchema = require('./comment.js').schema;

var topicSchema = mongoose.Schema({
	title: String,
	vote: Number,
	comments: [commentSchema],
	author: String
});

var Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;