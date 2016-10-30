(function () {

    angular
        .module('graph')
        .controller('GraphCtrl', Graph);

    Graph.$inject = ['$q', '$http', 'GitStatService'];



    function Graph($q, $http, GitStatService) {
        var vm = this;
        vm.token = '150944d62a81baaf3daeaf81c0f42b009b96f560';

        vm.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        vm.data = [300, 500, 100];

        vm.user = GitStatService.getUser();
        vm.repo = GitStatService.getRepo();


        vm.fetchApi = function () {
            console.log('test');
            fetchApi(vm, $http, GitStatService)
        };

        fetchApi(vm, $http, GitStatService);

    }

    function fetchApi(vm, $http,GitStatService) {
        GitStatService.setUser(vm.user);
        GitStatService.setRepo(vm.repo);

        $http.post('/api/request', {user: vm.user, repo: vm.repo}).then(function (ret) {
            
        });



       GitStatService.getLanguages().then(function (res) {
           console.log(1);
            vm.languagesGraphLabels = res.labels;
            vm.languagesGraphData = res.data;
        });

        GitStatService.getContribs().then(function (res) {
            vm.contribGraphLabels = res.labels;
            vm.contribGraphData = res.data
        });

        GitStatService.getAddPerWeek().then(function (res) {
            vm.linesGraphData = res.data;
            vm.lineGraphSeries = res.series;
            vm.lineGraphLabels = res.labels;
        })
    }
})();
