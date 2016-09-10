(function () {
    angular.module('base')
    .constant('pages', [
        {
            // default page
            url: 'credentials',
            name: '1',
            step: 1,
            controller: 'CredsCtrl as CredsCtrl'
        },{
            url: 'location',
            name: '2',
            step: 2,
            controller: 'LocationCtrl as LocationCtrl'
        },{
            url: 'social-networks',
            name: '3',
            step: 3,
            controller: 'SocialCtrl as SocialCtrl'
        },{
            url: 'captcha',
            name: '4',
            step: 4,
            controller: 'CaptchaCtrl as CaptchaCtrl'
        },{
            url: 'final',
            name: '5',
            step: 5,
            controller: 'FinalCtrl as FinalCtrl'
        }
    ]);

})();