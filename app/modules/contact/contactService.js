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
		.factory('ContactService', Contact);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Graph.$inject = ['$http'];

		function Graph ($http) {

		}

})();
