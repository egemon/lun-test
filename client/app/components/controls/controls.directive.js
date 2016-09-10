(function () {
	angular.module('base')
		.directive('controls', function () {
			return {
				controller: 'ControlsCtrl as ControlsCtrl',
				transclude: true,
				bindToController: {
					active: "<"
				},
				templateUrl: 'controls.html'
			};
		});

})();

