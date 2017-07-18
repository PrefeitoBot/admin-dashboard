module.exports = function(app) {
	app.get('/broadcast', function(req, res){
		app.app.controllers.broadcast.broadcast(app, req, res);
	});

	app.post('/broadcast', function(req, res){
		app.app.controllers.broadcast.data_request(app, req, res);
	});
}