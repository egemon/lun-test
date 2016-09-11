(function () {
	angular.module('base')
		.controller('ControlsCtrl', function (pages, $state, user) {
			var vm = this;
			vm.active = vm.active || 0;
			vm.pages = pages;

			vm.goPrevPage = goPrevPage;
			vm.goNextPage = goNextPage;
			vm.goStart = goStart;

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

			function goStart () {
				vm.active = 0;
				_.each(user, function (value, key, obj) {
					obj[key] = '';
				});
				$state.go(_.first(pages).url);
			}

		});

})();