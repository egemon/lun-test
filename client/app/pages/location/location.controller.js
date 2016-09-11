(function () {
	angular.module('base')
		.controller('LocationCtrl', function (serverSrv, user) {
			var vm = this;
			vm.countries = serverSrv.getCountries();
			vm.user = user;
			vm.user.country = vm.countries[0];
			vm.getCities = serverSrv.getCities;
		});

})();