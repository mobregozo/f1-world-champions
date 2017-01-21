(function() {
    'use strict';

    var config = [
        '$stateProvider',
        function($stateProvider) {
            $stateProvider.state('app.sport', {
                url: 'sport',
                views: {
                    'content': {
                        templateUrl: 'components/sport/sport.html'
                    }
                }
            });
        }
    ];

    angular.module('f1WorldChampions.sport', []).config(config);
})();