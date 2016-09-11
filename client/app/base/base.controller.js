(function () {
	function getActiveTab(pages) {
		return _.findIndex(pages, {url: location.hash.slice(2)});
	}

	angular.module('base')
		.controller('BaseCtrl', function (pages, user, $state, $scope) {
			var vm = this;
			vm.pages = pages;
			vm.active = getActiveTab(vm.pages) || 0;
			vm.user = user;
			vm.goToPage = goToPage;

			function goToPage (page) {
				$state.go(page.url);
			}
		});

})();