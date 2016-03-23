// Step 10: Create a controller
app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {

// Step 15: Creating a way for the client to make requests to the model on the server side
	var Meetup = $resource('/api/meetups');

// Step 26: Finding all the meetups in the db
	Meetup.query(function (results) {
		$scope.meetups = results;
	});

	$scope.meetups = []

// Step 16: Creating a function in order for the client to save a new meetup so it can be added to the db (/api/meetups)
	$scope.createMeetup = function () {
    	var meetup = new Meetup();
    	meetup.name = $scope.meetupName;
        // Step 25: Pass the result to the client to close out the callback.
    	meetup.$save(function (result) {
    		$scope.meetups.push(result);
    		$scope.meetupName = '';
    	});
    }
}]);
