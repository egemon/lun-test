(function () {
	angular.module('base')
		.controller('FinalCtrl', function (user) {
			var vm = this;
			vm.user = user;
		});

})();