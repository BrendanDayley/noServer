'use strict';
app.directive('buttonChanger', function () {
	return {
		restrict: 'AEC',
		link: function (scope, element, attr) {
			element.bind('mouseenter', function (e) {
				angular.element(e.target).addClass('buttonHover');
			});
			element.bind('mouseleave', function (e) {
				angular.element(e.target).removeClass('buttonHover');
			});
		}
	}
})



app.directive('tab', function () {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			elem: "="
		},
		templateUrl: './templates/aboutTemplates/tabs.html',
		controller: function ($scope) {
			var windows = $scope.windows = [];
			$scope.select = function (window) {
				angular.forEach(windows, function (window) {
					window.selected = false;
				});
				window.selected = true;
			};
			this.addWindow = function (window) {
				if (windows.length === 0) {
					$scope.select(window);
					$('#photos').trigger('panechanged');
				};
				windows.push(window);
			}
		},
	};
});
