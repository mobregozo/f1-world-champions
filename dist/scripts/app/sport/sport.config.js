(function() {
    'use strict';

    var config = [
        '$stateProvider',
        function($stateProvider) {
            $stateProvider.state('app.sport', {
                url: 'sport',
                views: {
                    'content': {
                        templateUrl: 'sport/sport.html'
                    }
                },
                ncyBreadcrumb: {
                    label: 'Sport Info'
                }
            });
        }
    ];

    angular.module('f1WorldChampions.sport', []).config(config);
})();