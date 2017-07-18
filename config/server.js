// Imports

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator= require('express-validator');

//Initializing express
var app = express();

// Enable EJS as default view engine
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Setting assets default folder to public and enabling body-parser and express validator
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

// Setting autoload for routes, models and controllers 
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

// Finally exports default configutation to app.js
module.exports = app;