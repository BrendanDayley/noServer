app.controller('aJSController', function ($scope, aJSService) {
	$scope.ngDirecs = aJSService.ngDirectives;
	$scope.showDetails = false;
});
