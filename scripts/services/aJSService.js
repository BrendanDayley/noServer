app.service('aJSService', function () {
	this.ngDirectives = [
		{
			direc: 'ngRepeat',
			description: 'ng repeat is used to repeat over items in an array and populate the DOM with that data',
			img: './images/nightSky.png'
		},
		{
			direc: 'ngInclude',
			description: 'ng include is used to include an external file into another, for example all this text has been called using an ng-include in the parent html file',
		},
		{
			direc: 'ngApp',
			description: 'ng-app is a directive to define which angular module your html code will use',
		},
		{
			direc: 'ngTransclude',
			description: 'ng-transclude is used to allow elements from within an isolate scope to persist into the parent scope so that it isn\'t overwritten by the isolate directive. While one of the directives I understand the least I used it within this page for each of the windows that the tabs open.',
		},
		{
			direc: 'Event Directives',
			description: 'Event directies such as, ng-keydown/keyup, and ng-mouseenter/mouseleave are extremely useful when you need to make or detect a change within your view, an example of the use of these event directives are the tabs up above, when the mouse cursor enters they change, and when the mouse cursor leaves then they change back.',
		},
		{
			direc: 'Custom Directives',
			description: 'the biggest reason to use AngularJS is the custom directives, at the same time they can be the most complex and difficult to understand. Custom directives give a developer the ability to build their own library based on their frequent needs. Several custom directives went into the making of this site',
}
		]
});
