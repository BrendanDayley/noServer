app.controller('homeController', function ($scope, homeService) {
	'use strict';

	$scope.achievements = homeService.getAchievements;
	$scope.workHistory = homeService.workHistory;
	console.log(homeService.getFriends);

});
