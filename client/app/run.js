(function () {
	angular.module('base').run(function ($rootScope, user, pages, $state) {

		var url = location.hash.slice(2);

		if (!user.name && !user.email) {
			return $state.go(pages[0].url);
		}
		//
		// $rootScope.$on( '$stateChangeStart', function(e, toState) {
		//
		// 	if (!user.country && !user.city && url !== pages[0].url && url !== pages[1].url) {
		// 		e.preventDefault();
		// 		$rootScope.$broadcast('redirect');
		// 		return $state.go(pages[1].url);
		// 	}
		//
		// 	if (!user.picture && url === _.last(pages).url) {
		// 		e.preventDefault();
		// 		$rootScope.$broadcast('redirect');
		// 		$state.go(pages[3].url);
		// 	}
		//
		//
		// });
	});
})();