(function () {

    angular
        .module('history')
        .controller('HistoryCtrl', History);

    History.$inject = ['$q', '$http', HistoryService];



    function History($q, $http, HistoryService) {
        var vm = this;
        vm.items = [1,2,3];


        HistoryService.getHistory().then(function (ret) {
            vm.items = ret.data;
        })

    }
})();
