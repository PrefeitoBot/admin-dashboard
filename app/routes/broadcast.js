module.exports = function(app) {
	app.get('/broadcast', function(req, res){
		app.app.controllers.broadcast.broadcast(app, req, res);
	});
}