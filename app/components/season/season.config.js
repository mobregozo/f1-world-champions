(function() {
    'use strict';

    angular.module('f1WorldChampions.season', []).config(config)

    .constant('seasonLimit', {
        FROM: 55,
        LIMIT: 11
    })

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('app.season', {
                url: 'season',
                abstract: true,
                views: {
                    'content': {
                        templateUrl: 'components/season/season.html'
                    }
                }
            })
            .state('app.season.list', {
                url: '/list',
                views: {
                    'season-content': {
                        templateUrl: 'components/season/season.list.html',
                        controller: 'SeasonListCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.season.detail', {
                url: '/:seasonId',
                views: {
                    'season-content': {
                        templateUrl: 'components/season/season.detail.html',
                        controller: 'SeasonDetailCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
    }

})();


// http: //ergast.com/api/f1/seasons.json?limit=11&offset=55