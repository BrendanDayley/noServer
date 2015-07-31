app.controller('homeController', function ($scope, homeService) {
	'use strict';

	$scope.messages = homeService.getMessages;
	$scope.friends = homeService.getFriends;
	console.log(homeService.getFriends);

});
