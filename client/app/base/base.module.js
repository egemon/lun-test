(function () {
	angular.module('base', ['templates', 'ui.router', 'ui.bootstrap']).run(function ($rootScope, user, pages) {
		$rootScope.$on( '$stateChangeStart', function(e, toState) {
			// var state = toState.name;
			// var validator = [
			// 	{
			// 		name: 'credentials',
			// 		fields: ['name', 'email']
			// 	},
			// 	{
			// 		name: 'location',
			// 		fields: ['country', 'city']
			// 	},
			// 	{
			// 		name: 'socials',
			// 		fields: []
			// 	},
			// 	{
			// 		name: 'captcha',
			// 		fields: []
			// 	},
			// 	{
			// 		name: 'final',
			// 		fields: []
			// 	},
			// ];
			//
			// var homePage = getHomePage(user);
			//
			// function isStateOk(user, stateName) {
			// 	return _.join(_.pick(user, _.map(_.find(validator, {name: stateName})), 'fields'), '');
			// }
			//
			// function getHomePage () {
			// 	var homePage = _.first(pages);
			// 	_.each(validator, function (value, stateName) {
			// 		if (isStateOk(user, stateName)) {
			// 			homePage = _.find(pages, {name: stateName});
			// 		}
			// 	});
			// 	return homePage;
			// }


		});
	});
})();