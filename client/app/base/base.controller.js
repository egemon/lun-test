(function () {
	angular.module('base')
		.controller('BaseCtrl', ['pages', function (pages) {
			var vm = this;
			vm.pages = pages;
		}]);

})();