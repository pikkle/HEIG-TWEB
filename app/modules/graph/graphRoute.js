angular.module('graph')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('graph', {
				url:'/',
				templateUrl: 'modules/graph/graph.html',
				controller: 'GraphCtrl',
				controllerAs: 'vm'
			});
	}]);
