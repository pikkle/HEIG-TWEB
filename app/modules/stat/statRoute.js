angular.module('stat')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('stat', {
				url:'/stat',
				templateUrl: 'modules/stat/stat.html',
				controller: 'StatCtrl',
				controllerAs: 'vm'
			});
	}]);
