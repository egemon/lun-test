(function () {
	angular.module('base')
		.value('user', {
			name: 'Illia',
			email: 'illia@example.com',
			country: '',
			city: 'Donetsk',
			networks: {
				FB:'http://a',
				VK:'http://a',
				OD:'http://a',
				TW:'http://a'
			},
			// picture: {
			// 	src: 'assets/cat1.jpg',
			// 	id: 1
			// }
		});

})();