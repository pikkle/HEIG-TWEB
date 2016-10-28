(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:graphTest
	 * @description
	 * # graphTest
	 * Test of the app
	 */

	describe('contact test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('ghe');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('ContactCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
