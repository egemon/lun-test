(function () {
	angular.module('base')
		.directive('mainContainer', function () {
			return {
				controller: 'MainContainerCtrl as MainContainerCtrl',
				transclude: true,
				templateUrl: 'main-container.html'
			};
		});

})();

