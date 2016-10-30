(function () {

    angular
        .module('graph')
        .controller('GraphCtrl', Graph);

    Graph.$inject = ['$q', '$http', 'GitStatService'];



    function Graph($q, $http, GitStatService) {
        var vm = this;

        vm.hiddeGraphs = false;


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
           vm.hiddeGraphs = false;
            vm.languagesGraphLabels = res.labels;
            vm.languagesGraphData = res.data;
        }).catch(function (msg) {
           if (msg === 'Repo not found')
               vm.hiddeGraphs = true;
           console.log(msg);
       });

         setTimeout(function () {},2000);

        GitStatService.getContribs().then(function (res) {
            vm.hiddeGraphs = false;
            vm.contribGraphLabels = res.labels;
            vm.contribGraphData = res.data
        }).catch(function(msg) {
            if (msg === 'Repo not found')
               vm.hiddeGraphs = true;
            console.log(msg);
        });

        setTimeout(function () {},20000);

        GitStatService.getAddPerWeek().then(function (res) {
            vm.hiddeGraphs = false;
            vm.linesGraphData = res.data;
            vm.lineGraphSeries = res.series;
            vm.lineGraphLabels = res.labels;
        }).catch(function (msg) {
            if (msg === 'Repo not found')
               vm.hiddeGraphs = true;
            console.log(msg);
        });
    }
})();
