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
                        templateUrl: 'season/season.html'
                    }
                }
            })
            .state('app.season.list', {
                url: '/list',
                views: {
                    'season-content': {
                        templateUrl: 'season/season.list.html',
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
                views: {
                    'season-content': {
                        templateUrl: 'season/season.detail.html',
                    }
                }
            })
            .state('app.season.detail.races', {
                url: '/races',
                views: {
                    'season-detail': {
                        templateUrl: 'season/season.detail.races.html',
                        controller: 'SeasonRacesCtrl',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    parent: 'app.season.list',
                    label: 'Races'
                }
            })
            .state('app.season.detail.race', {
                url: '/:raceId',
                views: {
                    'season-detail': {
                        templateUrl: 'season/season.detail.race.html',
                        controller: 'SeasonRaceCtrl',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    parent: 'app.season.detail.races',
                    label: 'Race {{vm.raceSelected}}'
                }
            });
    }

})();