(function () {
	angular.module('base')
		.directive('base', function () {
			return {
				controller: 'BaseCtrl as BaseCtrl',
				templateUrl: 'base.html'
			};
		});

})();

