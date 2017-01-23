(function() {
    'use strict';

    angular.module('f1WorldChampions.home', []).config(config)

    .constant('carouselConfig', {
        IMAGES: [{
            url: 'assets/images/champion_2005.jpg',
            champion: 'Alonso',
            year: 2005,
            id: 0
        }, {
            url: 'assets/images/champion_2007.jpg',
            champion: 'Räikkönen',
            year: 2007,
            id: 1
        }, {
            url: 'assets/images/champion_2008.jpg',
            champion: 'Hamilton',
            year: 2008,
            id: 2
        }, {
            url: 'assets/images/champion_2009.jpg',
            champion: 'Button',
            year: 2009,
            id: 3
        }, {
            url: 'assets/images/champion_2013.jpg',
            champion: 'Vettel',
            year: 2013,
            id: 4
        }, {
            url: 'assets/images/champion_2015.jpg',
            champion: 'Hamilton',
            year: 2015,
            id: 5
        }],
        INVERVAL: 4000
    });

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider.state('app.home', {
            url: 'home',
            views: {
                'content': {
                    templateUrl: 'home/home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'vm'
                }
            },
            ncyBreadcrumb: {
                label: 'Home'
            }
        });
    }
})();