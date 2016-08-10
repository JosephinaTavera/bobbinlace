var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
	comment: String,
	author: String
});

var Comment = mongoose.model('Comment', commentSchema); 

module.exports = Comment;