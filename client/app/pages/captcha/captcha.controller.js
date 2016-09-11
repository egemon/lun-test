(function () {
	angular.module('base')
		.controller('CaptchaCtrl', function (serverSrv, user, $scope) {
			var vm = this;
			vm.isCorrect = false;
			vm.isSelected = false;
			vm.user = user;

			serverSrv.getCaptcha().then(function (captchas) {
				vm.captchas = captchas;
				if (vm.user.picture) {
					vm.user.picture = _.find(vm.captchas, _.omit(vm.user.picture, '$$hashKey'));
					validateCaptcha(vm.user.picture);
				}
			});

			vm.validateCaptcha = validateCaptcha;

			function validateCaptcha(captcha) {
				vm.user.picture = captcha;
				return serverSrv.checkCaptcha(captcha).finally(function () {
					vm.isSelected = true;
				}).then(function () {
					vm.isCorrect = true;
				}).catch(function (err) {
					vm.isCorrect = false;
				});
			}
		});

})();