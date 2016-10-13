'use strict';

/**
 * @ngdoc function
 * @name app.route:graphRoute
 * @description
 * # graphRoute
 * Route of the app
 */

angular.module('graph')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('graph', {
				url:'/',
				templateUrl: 'app/modules/graph/graph.html',
				controller: 'GraphCtrl',
				controllerAs: 'vm'
			});


	}]);
