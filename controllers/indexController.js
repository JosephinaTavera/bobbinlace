// revamped code from original since original code was not mangeable
// when debugging.    
// Focused too much on trying to get carousel to run and not the tail end of project

var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Topic = require('../models/topic.js');
var Comment = require('../models/comment.js')

// Post from Start
router.post('/', function(req,res){
		User.create(req.body,function(err, data){
		res.redirect('index/topic/' + data.username);
	})
})


// Start
router.get('/', function(req,res)
{
	res.render('home.html.ejs');

});



router.get('/topic/:username', function(req,res)
{
	Topic.find({}, function(err,topic){
	res.render('index.html.ejs',{
		user: req.params.username,
		list: topic
	});
	// res.json(results);
})

});


router.post('topic', function(req,res)
{
	res.redirect('topic/new');

});

module.exports = router;