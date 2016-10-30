angular.module('history')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('history', {
				url:'/history',
				templateUrl: 'modules/history/history.html',
				controller: 'HistoryCtrl',
				controllerAs: 'vm'
			});
	}]);
