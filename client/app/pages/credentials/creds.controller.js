(function () {
	angular.module('base')
		.controller('CredsCtrl', [function (title) {
			var vm = this;
			vm.title = title;
		}]);

})();