(function () {
	angular.module('base')
		.controller('ControlsCtrl', function (pages, $state) {
			var vm = this;
			vm.active = vm.active || 0;
			vm.pages = pages;

			vm.goPrevPage = goPrevPage;
			vm.goNextPage = goNextPage;

			function goPrevPage() {
				var prevPage = vm.pages[vm.active - 1] || _.first(pages);
				vm.active--;
				$state.go(prevPage.url);
			}

			function goNextPage() {
				var nextPage = vm.pages[vm.active + 1] || _.last(pages);
				vm.active++;
				$state.go(nextPage.url);
			}

		});

})();