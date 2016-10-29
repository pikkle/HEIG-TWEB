(function () {
    angular
        .module('stat')
        .factory('StatService', StatService);

    StatService.$inject = ['$http', '$q'];

    function StatService($http, $q) {

    }
})();
