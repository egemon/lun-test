(function () {
    angular.module('base')
    .config(['$stateProvider', '$urlRouterProvider', 'pages',
     routerConfig]);

function routerConfig ($stateProvider, $urlRouterProvider, pages) {

  $urlRouterProvider.otherwise('/' + pages[0].url);

  _.each(pages, function (page) {
    (function (page) {
      var dataKey = page.url;
      $stateProvider.state(dataKey, {
        url: '/' + dataKey,
        templateUrl: dataKey + '.html',
        controller: page.controller
      });
    })(page);
  });
}

})();