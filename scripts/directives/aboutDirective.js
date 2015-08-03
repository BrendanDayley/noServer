app.directive('window', function () {
	return {
		templateUrl: './templates/aboutTemplates/html.html',
		controller: function ($scope) {},
		link: function (scope, element, attrs) {
			//			element.bind('mouseenter', function () {
			//				console.log('working');
			//			});
			//			element.bind('mouseleave', function () {
			//				console.log('leaving');
			//			});
		}
	};
});


//app.directive('window', function () {
//	debugger;
//	return {
//		require: '^tab',
//		restrict: 'AEC',
//		templateUrl: 'templates/aboutTemplates/pane.html',
//		transclude: true,
//		scope: {
//			title: '@'
//		},
//		link: function (scope, element, attrs, tabsCtrl) {
//			tabsCtrl.addWindow(scope);
//		},
//	};
//});
