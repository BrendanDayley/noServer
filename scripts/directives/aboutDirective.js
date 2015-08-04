'use strict';


app.directive('pane', function () {

	return {
		require: '^tab',
		restrict: 'E',
		templateUrl: 'templates/aboutTemplates/window.html',
		transclude: true,
		scope: {
			title: '@'
		},
		link: function (scope, element, attrs, tabsCtrl) {
			tabsCtrl.addWindow(scope);
		},
	};
});
