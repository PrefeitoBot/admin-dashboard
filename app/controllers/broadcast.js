module.exports.broadcast = function(app, req, res) {
	res.render("broadcast");
}

module.exports.data_request = function(app, req, res) {
	res.send(req.body);
}