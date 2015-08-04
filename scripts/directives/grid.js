app.directive('grid', function () {
	return {
		link: function (scope, elem, attrs) {
			elem.bind('click', function (e) {
				scope.showDetails = !scope.showDetails;
				console.log(showDetails);
			})
		}
	}
});
