(function () {
    angular.module('base')
    .constant('pages', [
        {
            // default page
            url: 'credentials',
            name: '1',
            step: 1,
            resolve: {
                title: 'Введите имя и e-mail'
            },
            controller: 'CredsCtrl as CredsCtrl'
        },{
            url: 'location',
            name: '2',
            step: 2,
            resolve: {
                title: 'Выберите страну и город'
            },
            controller: 'LocationCtrl as LocationCtrl'
        },{
            url: 'socials',
            name: '3',
            step: 3,
            resolve: {
                title: 'Отметьте социальные сети'
            },
            controller: 'SocialCtrl as SocialCtrl'
        },{
            url: 'captcha',
            name: '4',
            step: 4,
            resolve: {
                title: 'Выберте любимого котика'
            },
            controller: 'CaptchaCtrl as CaptchaCtrl'
        },{
            url: 'final',
            name: '5',
            step: 5,
            resolve: {
            },
            controller: 'FinalCtrl as FinalCtrl'
        }
    ]);

})();