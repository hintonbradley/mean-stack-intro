// Step 2: Create a server file to run the app
// Step 3: Add Express as a Node module
var express = require('express'),
// Step 4: Create a new application using Express
    app = express(),

// Step 18: Including bodyParser so Express can recognize JSON and be able to parse it
    bodyParser = require('body-parser'),

// Step 20: Include an ORM to gain access to the MongoDB commands for CRUD 
    mongoose = require('mongoose'),
    meetupsController = require('./server/controllers/meetups-controller');

// Step 24: Connect mongoose to the mongodb database
mongoose.connect('mongodb://localhost:27017/mean-demo');

// Step 19: parse the bodies of all incoming requests and parse application/json
app.use(bodyParser.urlencoded({ extended: false })),
app.use(bodyParser.json());

// Step 5: Define the basic get route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

// Step 13: Creating a shortcut to reply with /client/js when a file is requested using '/js'. The script will be returned statically from the js directory.
app.use('/js', express.static(__dirname + '/client/js'));

// Step 27: Creating a get request to find all meetups in the database.
// Callback function named list can be found in the server meetupsController, so when a get request is made to that route, the create function will be called.)
app.get('/api/meetups', meetupsController.list);

// Step 17: Creating a post request to add a new meetup to the db. (Also creating a server directory to keep code separate and keep the server.js file clean. - Callback function named create can be found in the server meetupsController, so when a post request is made to that route, the create function will be called.)
app.post('/api/meetups', meetupsController.create);

// Step 6: Make the app listen on a port
app.listen(3000, function() {
	console.log('I\'m listening');
})