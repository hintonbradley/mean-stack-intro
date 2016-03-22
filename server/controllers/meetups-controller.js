// Step 22: Defining the Meetup model
var Meetup = require('../models/meetup');

// Exporting the function so the server.js file has access to it.
module.exports.create = function (req, res) {
// Step 23: Creating a new instance of the model
	var meetup = new Meetup(req.body);
	meetup.save(function (err, result) {
		res.json(result);
	});
}

// Step 28: Creating ability to retrieve all meetups from the database
module.exports.list = function (req, res) {
	Meetup.find({}, function (err, results) {
		res.json(results);
	});
}