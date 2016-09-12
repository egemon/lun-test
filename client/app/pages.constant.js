(function () {
    angular.module('base')
    .constant('pages', [
        {
            // default page
            url: 'credentials',
            name: '1',
            step: 1,
            data: {
                title: 'Введите имя и e-mail'
            },
            controller: 'CredsCtrl as CredsCtrl'
        },{
            url: 'location',
            name: '2',
            step: 2,
            data: {
                title: 'Выберите страну и город'
            },
            controller: 'LocationCtrl as LocationCtrl'
        },{
            url: 'socials',
            name: '3',
            step: 3,
            data: {
                title: 'Отметьте социальные сети'
            },
            controller: 'SocialCtrl as SocialCtrl'
        },{
            url: 'captcha',
            name: '4',
            step: 4,
            data: {
                title: 'Выберте любимого котика'
            },
            controller: 'CaptchaCtrl as CaptchaCtrl'
        },{
            url: 'final',
            name: '5',
            step: 5,
            controller: 'FinalCtrl as FinalCtrl'
        }
    ]);

})();