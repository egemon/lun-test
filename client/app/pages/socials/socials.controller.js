(function () {
	angular.module('base')
		.controller('SocialCtrl', function (user, serverSrv) {
			var vm = this;
			vm.user = user;
			vm.networks = [];
			vm.selectedNetworks = _.mapValues(user.networks, function () {
				return true;
			});
			serverSrv.getNetworks().then(function (networks) {
				vm.networks = networks;
			})
		});

})();