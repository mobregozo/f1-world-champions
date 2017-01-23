(function() {
    'use strict';

    angular.module('f1WorldChampions.driver', []).config(config)

    .constant('driverLimit', {
        LIMIT: 15
    });

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('app.driver', {
                url: 'driver',
                abstract: true,
                views: {
                    'content': {
                        templateUrl: 'driver/driver.html'
                    }
                }
            })
            .state('app.driver.list', {
                url: '/list',
                views: {
                    'driver-content': {
                        templateUrl: 'driver/driver.list.html',
                        controller: 'DriverListCtrl',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    label: 'Driver List'
                }
            })
            .state('app.driver.detail', {
                url: '/:driverId',
                views: {
                    'driver-content': {
                        templateUrl: 'driver/driver.detail.html',
                        controller: 'DriverDetailCtrl',
                        controllerAs: 'vm'
                    }
                },
                ncyBreadcrumb: {
                    label: 'Driver {{vm.driverSelected}}',
                    parent: 'app.driver.list'
                }
            });
    }

})();