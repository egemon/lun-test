(function () {
	function getActiveTab(pages) {
		return _.findIndex(pages, {url: location.hash.slice(2)});
	}

	angular.module('base')
		.controller('BaseCtrl', function (pages, user) {
			var vm = this;
			vm.pages = pages;
			vm.active = getActiveTab(vm.pages) || 0;
			vm.user = user;
		});

})();