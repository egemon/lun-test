(function () {
	angular.module('base')
		.controller('CaptchaCtrl', function (serverSrv) {
			var vm = this;
			vm.isCorrect = false;
			vm.isSelected = false;
			serverSrv.getCaptcha().then(function (captchas) {
				vm.captchas = captchas;
			});

			vm.checkCaptcha = checkCaptcha;

			function checkCaptcha(captcha) {
				vm.selectedCaptcha = captcha;
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