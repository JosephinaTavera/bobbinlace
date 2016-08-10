var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Topic = require('../models/topic.js');
var Comment = require('../models/comment.js')



router.post('/:author',function(req,res){
		console.log(req.params.author);
	Topic.find({}, function(err,topic){
	res.render('topic.html.ejs', {
		list: topic,
		user: req.params.author
	})
})
	})



// Topic




router.post('/new/:author', function(req,res){
		console.log('body of text has ' + req.body)
		Topic.create(req.body,function(err, data){
			console.log(data)
		res.redirect('/index/topic/username')
	})
})

// Topic Search
router.post('/search', function(req,res){
		// attempting search
		//     phrase = '/' + req.body.title + '/i' ;
		//     searchPhrase = {title: phrase};
		//      console.log(searchPhrase);
		// The following format does work
		// Topic.find({title: /Raffle/i}, function(err, data){
		Topic.find(req.body,function(err, data){
		res.render('index.html.ejs',{
			list: data,
			user: req.params.username
		})
	})
})


module.exports = router;