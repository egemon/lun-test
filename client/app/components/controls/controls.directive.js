(function () {
	angular.module('base')
		.directive('controls', function () {
			return {
				controller: 'ControlsCtrl as ControlsCtrl',
				transclude: true,
				bindToController: {
					active: "=",
					nextAvailiable: "<"
				},
				templateUrl: 'controls.html'
			};
		});

})();

