var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Topic = require('../models/topic.js');
var Comment = require('../models/comment.js')



router.get('/:_id', function(req,res){
	Topic.findOne(req.params,function(err,topic){
		res.render('comment.html.ejs', {
			list: topic,
			user: req.params.author
		})
});
});



router.get('/:_id/new', function(req,res){
	res.render('newcomment.html.ejs',{
		list: req.params
	});
})

router.post('/:_id/new', function(req,res){
	Topic.findOne(req.params,function(err,topic){
		topic.comments.push(req.body);
		topic.save(function(err) {
			if (err){
				console.error('ERROR');
			}
		});
		res.redirect('/comment/' + topic._id)
	})
})

// router.post('comment/search', function(req,res){
// 		// attempting search
// 		//     phrase = '/' + req.body.title + '/i' ;
// 		//     searchPhrase = {title: phrase};
// 		//      console.log(searchPhrase);
// 		// The following format does work
// 		// Topic.find({title: /Raffle/i}, function(err, data){

// 		Comment.find(req.body,function(err, data){
// 			console.log(data);
// 		res.redirect('/comment')
// 	})
// })






module.exports = router;