var app = require('./config/server');

var server = app.listen(8888, function(){
	console.log('Server Online');
});

