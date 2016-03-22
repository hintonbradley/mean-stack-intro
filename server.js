// Step 2: Create a server file to run the app
// Step 3: Add Express as a Node module
var express = require('express'),
// Step 4: Create a new application using Express
    app = express(),

    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    meetupsController = require('./server/controllers/meetups-controller');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser.urlencoded({ extended: false })),
app.use(bodyParser.json());

// Step 5: Define the basic get route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

// Step 12: Creating a shortcut to reply with /client/js when a file is requested using '/js'. The script will be returned statically from the js directory.
app.use('/js', express.static(__dirname + '/client/js'));

app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);

// Step 6: Make the app listen on a port
app.listen(3000, function() {
	console.log('I\'m listening');
})