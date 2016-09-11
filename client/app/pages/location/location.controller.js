(function () {
	angular.module('base')
		.controller('LocationCtrl', function (serverSrv, user, $q) {
			var vm = this;
			vm.user = user;

			serverSrv.getCountries().then(function (countries) {
				vm.countries = countries;
				vm.user.country = vm.user.country || vm.countries[0];
				return serverSrv.getCities(vm.user.country);
			}).then(function (cities) {
				vm.cities = cities;
			});

			vm.updateCities = updateCities;

			function updateCities (country) {
				return serverSrv.getCities(country).then(function (cities) {
					vm.cities = cities;
				});
			}
			vm.getCities = serverSrv.getCities;
		});

})();