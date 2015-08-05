app.directive('grid', function () {
	return {
		link: function (scope, elem, attrs) {
			elem.bind('mouseenter', function (e) {
				elem.attr('ng-show', 'true');
			})
		}
	}
});
