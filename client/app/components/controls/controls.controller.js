(function () {
	angular.module('base')
		.controller('ControlsCtrl', ['pages', function (pages) {
			var vm = this;
			vm.active = vm.active || 0;
			vm.prevPage = pages[vm.active - 1];
			vm.nextPage = pages[vm.active + 1];
		}]);

})();