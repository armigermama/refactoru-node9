
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var TranslateController = require('./controllers/translateController.js');
var QuizController = require('./controllers/quizController.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lingo');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

// routes
app.get('/', TranslateController.redirect);
app.get('/translate', TranslateController.translate);
app.post('/translate', TranslateController.detail);

app.get('/quiz', QuizController.index);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});


