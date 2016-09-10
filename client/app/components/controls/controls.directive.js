(function () {
	angular.module('base')
		.directive('controls', function () {
			return {
				controller: 'ControlsCtrl as ControlsCtrl',
				transclude: true,
				templateUrl: 'controls.html'
			};
		});

})();

