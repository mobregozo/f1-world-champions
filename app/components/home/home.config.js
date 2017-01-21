(function() {
    'use strict';

    var config = [
        '$stateProvider',
        function($stateProvider) {
            $stateProvider.state('app.home', {
                url: 'home',
                views: {
                    'content': {
                        templateUrl: 'components/home/home.html'
                    }
                }
            });
        }
    ];

    angular.module('f1WorldChampions.home', []).config(config);
})();