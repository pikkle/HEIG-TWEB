(function () {
    angular
        .module('history')
        .factory('HistoryService', StatService);

    HistoryService.$inject = ['$http', '$q'];

    function HistoryService($http, $q) {

    }
})();
