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
