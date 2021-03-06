(function() {
    'use strict';

    angular.module('f1WorldChampions', ['ui.router', 'ncy-angular-breadcrumb', 'templates', 'f1WorldChampions.config', 'f1WorldChampions.driver', 'f1WorldChampions.home', 'f1WorldChampions.season', 'f1WorldChampions.sport', 'ui.bootstrap'])

    .config(function($stateProvider, $urlRouterProvider) {

        // setup an abstract state for the navigation panel
        $stateProvider.state('app', {
            url: '/',
            abstract: true,
            templateUrl: 'navigation.html'
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');
    });
})();