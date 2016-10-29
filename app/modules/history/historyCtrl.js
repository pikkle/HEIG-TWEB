(function () {

    angular
        .module('history')
        .controller('HistoryCtrl', History);

    History.$inject = ['$q', '$http'];



    function History($q, $http) {
        var vm = this;

    }
})();
