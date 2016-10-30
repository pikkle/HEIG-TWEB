(function () {

    angular
        .module('graph')
        .controller('GraphCtrl', Graph);

    Graph.$inject = ['$q', '$http', 'GitStatService'];



    function Graph($q, $http, GitStatService) {
        var vm = this;


        vm.user = GitStatService.getUser();
        vm.repo = GitStatService.getRepo();


        vm.fetchApi = function () {
            fetchApi(vm, $http, GitStatService)
        };

        fetchApi(vm, $http, GitStatService);

    }

    function fetchApi(vm, $http,GitStatService) {
        GitStatService.setUser(vm.user);
        GitStatService.setRepo(vm.repo);

        $http.post('/api/request', {user: vm.user, repo: vm.repo}).then(function (ret) {
            
        });

        setTimeout(function () {},2000);

       GitStatService.getLanguages().then(function (res) {
           console.log(1);
            vm.languagesGraphLabels = res.labels;
            vm.languagesGraphData = res.data;
        });

         setTimeout(function () {},2000);

        GitStatService.getContribs().then(function (res) {
            vm.contribGraphLabels = res.labels;
            vm.contribGraphData = res.data
        });

        setTimeout(function () {},2000);


        GitStatService.getAddPerWeek().then(function (res) {
            vm.linesGraphData = res.data;
            vm.lineGraphSeries = res.series;
            vm.lineGraphLabels = res.labels;
        })
    }
})();
