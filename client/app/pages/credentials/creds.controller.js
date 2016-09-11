(function () {
	angular.module('base')
		.controller('CredsCtrl', function (user) {
			var vm = this;
			vm.user = user;
		});

})();