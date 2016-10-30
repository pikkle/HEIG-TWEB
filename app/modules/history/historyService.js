(function () {
    angular
        .module('history')
        .factory('HistoryService', HistoryService);

    HistoryService.$inject = ['$http', '$q'];

    function HistoryService($http, $q) {
        return{
            getHistory: function () {
                return $http.get('/api/request');
            }
        }
    }
})();
