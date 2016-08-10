var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Topic = require('../models/topic.js');
var Comment = require('../models/comment.js')


//Comment
// router.post('/comment', function(req,res)
// {
// 		res.redirect('/topic/:topicid/comment');
// });


router.get('/:_id', function(req,res){
	console.log(req.params._id)
	Topic.findOne(req.params_id,function(err,topic){
		// console.log('First Hello' + topic)
		res.render('comment.html.ejs', {
			list: topic,
			user: req.params.author
		})
});
});


// router.post('/new', function(req,res){
// 	res.redirect('comment/new');
// })

router.get('/:_id/new', function(req,res){
		// console.log(req.params);
	res.render('newcomment.html.ejs',{
		list: req.params
	});
})

router.post('/:_id/new', function(req,res){
	 console.log('req.params')
	Topic.findOne(req.params,function(err,topic){
		console.log(topic)
		console.log(req.body)
		console.log(topic.comments)
		topic.comments.push(req.body);
		topic.save(function(err) {
			if (err){
				console.error('ERROR');
			}
		});
		console.log(topic.comments)
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