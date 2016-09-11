(function () {
	angular.module('base')
		.value('user', {
			name: '',
			email: '',
			country: '',
			city: '',
			networks: {
				FB:'http://a'
			},
			picture: ''
		});

})();