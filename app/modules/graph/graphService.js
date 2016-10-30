(function () {
    angular
        .module('graph')
        .factory('GitStatService', GitStatService);

    GitStatService.$inject = ['$http', '$q'];

    function GitStatService($http, $q) {

        var user = 'pikkle';
        var repo = 'HEIG-TWEB';


        return {
            getUser: function () {
                return user;
            },

            getRepo: function () {
                return repo;
            },

            setUser: function (newUser) {
                user =  newUser;
            },

            setRepo: function (newRepo) {
                repo = newRepo;
            },

            getLanguages: function () {
                var deferred = $q.defer();

                var promiseLanguages = $http.get('/repos/' + user + '/' + repo + '/languages');
                var languagesGraphLabels;
                var languagesGraphData;


                promiseLanguages.then(function (ret) {
                    var languages = ret.data;
                    languagesGraphLabels = Object.keys(languages);
                    languagesGraphData = [];
                    for (var item in languagesGraphLabels) {
                        languagesGraphData.push(languages[languagesGraphLabels[item]]);
                    }
                    deferred.resolve({
                        data:  languagesGraphData,
                        labels: languagesGraphLabels
                    });
                });
                return deferred.promise;
            },

            getContribs: function () {
                var deferred = $q.defer();

                var promiseContrib = $http.get('/repos/' + user + '/' + repo + '/stats/contributors');
                promiseContrib.then(function (ret) {
                    var contrib = ret.data;

                    var contribGraphLabels = [];
                    var contribGraphData = [];


                    for(var item in contrib){
                        contribGraphLabels.push(contrib[item]['author']['login']);
                        contribGraphData.push(contrib[item]['total'])
                    }

                    deferred.resolve({
                        data:  contribGraphData,
                        labels: contribGraphLabels
                    });
                });

                return deferred.promise;
            },

            getAddPerWeek: function () {
                var deferred = $q.defer();

                var promiseAddPerWeek = $http.get('/repos/' + user + '/' + repo + '/stats/code_frequency');

                promiseAddPerWeek.then(function (ret) {
                    var add = ret.data;
                    var linesAddGraphData = [];
                    var linesDelGraphData = [];
                    var linesDiffGraphData = [];
                    var lineGraphLabels = [];
                    var weeks = [];
                    var lineGraphSeries = ['Ajout', 'Supperssion', 'Differance'];



                    for (var item in add){
                        weeks.push(add[item][0]);

                        var d = new Date(0);
                        d.setUTCSeconds(add[item][0]);

                        lineGraphLabels.push(d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear());
                        linesAddGraphData.push(add[item][1]);
                        linesDelGraphData.push(add[item][2]);
                        linesDiffGraphData.push(add[item][1] - add[item][2]);

                    }

                    deferred.resolve({
                        data:  [linesAddGraphData, linesDelGraphData, linesDiffGraphData],
                        labels: lineGraphLabels,
                        series: lineGraphSeries
                    });


                });

                return deferred.promise;
            }
        }
    }
})();
