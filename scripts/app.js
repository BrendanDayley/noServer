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
		.state('home.newsFeed', {
			//			url: 'newsFeed',
			templateUrl: 'templates/newsFeed.html',
			controller: 'homeController',
		})
		.state('home.friends', {
			templateUrl: 'templates/friendsList.html',
			controller: 'homeController',
		})
		//		 ABOUT PAGE AND VIEWS
		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html',
			controller: 'aboutController',
		})
});
