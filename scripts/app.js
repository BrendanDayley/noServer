var app = angular.module('noServer', ['ui.router']);

app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
	'use strict';

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	// HOME STATES AND VIEWS
		.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'homeController',
		})
		.state('home.accomplishments', {
			//			url: 'newsFeed',
			templateUrl: 'templates/accomplishments.html',
			controller: 'homeController',
		})
		.state('home.workHistory', {
			templateUrl: 'templates/workHistory.html',
			controller: 'homeController',
		})
		//		 ABOUT PAGE AND VIEWS
		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html',
			controller: 'aboutController',
		})
});
