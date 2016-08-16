
// express 
var express = require('express');
var app = express(); 

// body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// Mongoose
var mongoose = require('mongoose');
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/lacedb';
var db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(mongoUri);
db.once('open', function(){
	console.log('Connected to mongodb');
});

/*Views*/
app.set('view engine', 'ejs');
app.set('views', './views');


// server
var port = process.env.PORT || 3000;
app.listen(port, function()
{
	console.log('Connected to server');
});

//application 

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendfile('./public/index.html');
});

var indexController = require('./controllers/indexController.js');
app.use('/index', indexController);

var topicController = require('./controllers/topicController.js');
app.use('/topic', topicController);

var commentController = require('./controllers/commentController.js');
app.use('/comment', commentController);