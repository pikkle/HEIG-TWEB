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
		.module('graph')
		.factory('GraphService', Graph);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Graph.$inject = ['$http'];

		function Graph ($http) {

		}

})();
