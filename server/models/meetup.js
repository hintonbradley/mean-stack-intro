var mongoose = require('mongoose');

// Step 21: Create a meetup model object for mongoose
module.exports = mongoose.model('Meetup', {
	name: {type: String, required = true}
});