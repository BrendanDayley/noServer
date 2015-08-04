app.controller('aJSController', function ($scope, aJSService) {
	$scope.ngDirecs = aJSService.ngDirectives;
	console.log('hello' + $scope.ngDirecs);
	$scope.showDetails = false;
	$scope.cool = aJSService.ngDirectives[3].description;
	console.log($scope.cool);
});
