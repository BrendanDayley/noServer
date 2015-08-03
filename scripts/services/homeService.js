app.service('homeService', function () {
	'use strict';

	this.getAchievements = [
		{
			date: 'May, 2010',
			accomplishment: "Eagle Scout",
		},
		{
			date: "October, 2015",
			accomplishment: "DevMountain Graduate",
		},
		{
			date: 'April, 2015',
			accomplishment: "Co-Author of Sam's Teach Yourself AngularJS, JavaScript, and jQuery",
		},
		{
			date: '2010-2011',
			accomplishment: "Co-Founder of Spanish Fork HighSchool's robotics club",
		},
	];



	this.workHistory = [
		{
			company: 'Big 5 Sporting Goods',
			years: 'march, 2013 - February, 2015',
			title: 'Sales Representative, Cashier',
			responsibilities: ['Customer Service', 'Being professional', 'Keeping the store organized', 'Cashier', 'Restock', 'kept the bathrooms and lunch area clean']
	},
		{
			company: 'Blue Mountain Scout Camp',
			years: 'One week in june for the years 2008 - 2012',
			title: 'Volunteer Climbing and Rappelling staff member',
			responsibilities: ['Keep scouts safe', 'Understand and apply proper safety procedurs', 'Know the knotts and equipment needed', ]
		},
	];

});
