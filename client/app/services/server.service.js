(function () {
	angular.module('base')
		.service('serverSrv', function ($q) {
			return {
				getCountries: getCountries,
				getCities: getCities,
				getNetworks: getNetworks,
				getCaptcha: getCaptcha,
				checkCaptcha: checkCaptcha,
			};

			function getCountries () {
				return _.chain({
					"1": "Ukraine",
					"2": "Germany",
					"3": "France",
					"4": "Spain",
					"5": "Sweden",
					"6": "USA",
					"7": "Canada",
					"8": "Moldova",
					"9": "Belarus",
					"10": "Poland"
				})
					.mapValues(function (value, key) {
						return {
							code: key,
							name: value
						}
					})
					.toArray()
					.value();
			}

			function getCities (country) {
				return $q.when({
					"2": {"country": 3, "name": "Paris"},
					"3": {"country": 4, "name": "Madrid"},
					"4": {"country": 6, "name": "Houston"},
					"5": {"country": 7, "name": "Montreal"},
					"6": {"country": 8, "name": "Кишинев"},
					"7": {"country": 9, "name": "Minsk"},
					"8": {"country": 10, "name": "Warsaw"},
					"100": {"country": 1, "name": "Львов"},
					"101": {"country": 1, "name": "Николаев"},
					"103": {"country": 1, "name": "Переяслав-Хмельницкий"},
					"104": {"country": 1, "name": "Каменец-Подольский"},
					"105": {"country": 1, "name": "Donetsk"},
					"106": {"country": 1, "name": "Kharkov"},
					"107": {"country": 1, "name": "Луцк"},
					"108": {"country": 1, "name": "Poltava"},
					"109": {"country": 1, "name": "Черновцы"},
					"299": {"country": 1, "name": "Чернигов"},
					"333": {"country": 1, "name": "Чернигов"}
				}).then(function (cities) {
					_.chain(cities)
						.groupBy('country')
						.mapValues(function (value, key) {
							return {
								countryCode: key,
								cities: _.map(value, 'name')
							};
						})
						.toArray()
						.filter({countryCode: country.code})
						.map('cities')
						.flatten()
						.value();
				})
			}

			function getNetworks () {
				return $q.when(['FB', 'VK', 'OD', 'TW']);
			}

			function getCaptcha () {
				return $q.when([{
					src: 'assets/cat1.jpg',
					id: 1
				}, {
					src: 'assets/cat2.jpg',
					id: 2
				}, {
					src: 'assets/cat3.jpg',
					id: 3
				}, {
					src: 'assets/dog4.jpg',
					id: 4
				}]);
			}

			function checkCaptcha (captcha) {
				return captcha.id === 4 ? $q.reject() : $q.resolve();
			}
		})
})();