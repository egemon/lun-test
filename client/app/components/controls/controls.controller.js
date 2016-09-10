(function () {
	angular.module('base')
		.controller('ControlsCtrl', [function () {
			var vm = this;

			vm.prevPage = 'prevPage';
			vm.nextPage = 'nextPage';
		}]);

})();