app.directive('tab', function () {
	return {
		restrict: 'AEC',
		link: function (scope, element, attr) {
			element.bind('mouseenter', function (e) {
				angular.element(e.target).addClass('buttonHover');
			});
			element.bind('mouseleave', function (e) {
				angular.element(e.target).removeClass('buttonHover');
			});
			scope.clicker = function (e) {
				alert('Ouch!');
				console.log((e.target));
			}
			element.bind('click', scope.clicker);
		}
	}
})



//app.directive('tab', function () {
//	return {
//		restrict: 'C',
//		transclude: true,
//		scope: {},
//		controller: function ($scope) {
//			var windows = $scope.windows = [];
//			$scope.select = function (window) {
//				angular.forEach(windows, function (window) {
//					window.selected = false;
//				});
//				window.selected = true;
//			};
//			this.addWindow = function (window) {
//				if (windows.length === 0) {
//					$scope.select(window);
//				}
//				windows.push(window);
//			}
//		},
//	};
//});
