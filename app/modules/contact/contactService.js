(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:graphService
	 * @description
	 * # graphService
	 * Service of the app
	 */

  	angular
		.module('contact')
		.factory('ContactService', ContactService);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		function ContactService() {
			var counter = 0;
			return {
				test: function() {
					counter++;
					console.log("it works: " + counter);
				},

				test2: function() {
					counter++;
					console.log("A " + counter);
				}
			}
		}


})();
