(function () {
	angular.module('base')
		.filter('translate', function () {
			var hash = {
				FB: 'Facebook',
				VK: 'Вконтакте',
				OD: 'Одноклассники',
				TW: 'Twitter',
			};
			return function translate (str) {
				return hash[str] || str;
			};

		});

})();