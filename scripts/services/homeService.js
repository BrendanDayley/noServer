app.service('homeService', function () {
	'use strict';

	this.getMessages = [
		{
			author: 'Brendan',
			message: "haha I'm good at this",
		},
		{
			author: "WrathBourne",
			message: "whatcha talkin 'bout?",
		},
		{
			author: 'Brendan',
			message: "I'm a coder!!!",
		},
		{
			author: 'dad',
			message: 'come back in 20 years',
		},
	];



	this.getFriends = [
		{
			name: 'Bob Marley',
			birthday: '12/3/1957',
			dateAdded: '04/9/2011',
			gender: 'male',
			interests: ['guitar', 'weed', 'Composing']
	},
		{
			name: 'Dork McDorkin',
			birthday: 'unkown',
			dateAdded: 'also unkown',
			gender: 'been on both sides',
			interests: ['YOU'],
	},
		{
			name: 'Shawn White',
			birthday: 'old',
			dateAdded: 'monday',
			gender: 'male',
			interests: ['slowing down the olympics cause of premodonna bulls***', 'snowboarding'],
	},
		{
			name: 'Brad Dayley',
			birthday: '10/11/1972',
			dateAdded: '7/17/1994',
			gender: 'male',
			interests: ['technology', 'writing books', 'Karate', 'Indian Foods', 'programming', 'learning', 'nature', 'jeeping', 'D', ]
		},
	];

});
