(function () {
	function getActiveTab(pages, url) {
		return _.findIndex(pages, {url: url || location.hash.slice(2)});
	}

	angular.module('base')
		.controller('BaseCtrl', function (pages, user, $state, $scope) {
			var vm = this;
			vm.pages = pages;
			vm.user = user;
			vm.goToPage = goToPage;
			$scope.$on( '$stateChangeStart', defineActivePage);
			defineActivePage();



			function defineActivePage (e, toState) {
				$scope.$applyAsync(function () {
					vm.active = getActiveTab(vm.pages, toState && toState.name) || 0;
				});
			}

			function goToPage (page) {
				$state.go(page.url);
			}
		});

})();