(function() {
    'use strict';

    angular.module('f1WorldChampions.season', []).config(config)

    .constant('seasonLimit', {
        FROM: 55,
        LIMIT: 11
    });

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
                },
                ncyBreadcrumb: {
                    label: 'Season Champions'
                }
            })
            .state('app.season.detail', {
                url: '/:seasonId',
                abstract: true,
                views: {
                    'season-content': {
                        templateUrl: 'components/season/season.detail.html',
                    }
                }
            })
            .state('app.season.detail.winners', {
                url: '/winners',
                views: {
                    'season-detail': {
                        templateUrl: 'components/season/season.detail..winners.html',
                        controller: 'SeasonDetailCtrl',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    label: '{{vm.seasonSelected}}',
                    parent: 'app.season.list'
                }
            })
            .state('app.season.detail.race', {
                url: '/:raceId',
                views: {
                    'season-detail': {
                        templateUrl: 'components/season/season.race.html',
                        controller: 'SeasonRaceCtrl',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    label: '{{vm.raceSelected}}',
                    parent: 'app.season.detail.race'
                }
            });
    }

})();


// http: //ergast.com/api/f1/seasons.json?limit=11&offset=55