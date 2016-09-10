/**
 * Created by ilukianov on 01.08.16.
 */
(function () {
angular.module('base')
.config(['$httpProvider', '$provide', function ($httpProvider, $provide) {
	$provide.factory('myHttpInterceptor', ['$q', function($q) {

		return {
			'request': function(config) {
				console.log('request()', arguments);
				return config;
			},
			'requestError': function(rejection) {
				console.log('requestError()', arguments);
				// alert('Error' + rejection);
				return $q.reject(rejection);
			},


			'response': function(response) {
				console.log('response()', arguments);
				return response;
			},
			'responseError': function(rejection) {
				console.log('responseError()', arguments);
				// alert('Error' + rejection);
				return $q.reject(rejection);
			}
		};
	}]);
	$httpProvider.interceptors.push('myHttpInterceptor');
}]);
})();