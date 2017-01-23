(function() {

    'use strict';

    describe('Controller: HomeCtrl', function() {

        // load the controller's module
        beforeEach(module('f1WorldChampions'));

        var HomeCtrl, myScope, state;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope, $stateParams) {
            myScope = $rootScope.$new();
            HomeCtrl = $controller('HomeCtrl', {
                $scope: myScope
            })
            state = $stateParams;
        }));

        it('should Controller injected', function() {
            expect(HomeCtrl).toBeDefined();
        });

        it('should controller default values be defined', function() {
            expect(HomeCtrl.noWrapSlides).toBeFalsy();
            expect(HomeCtrl.active).toBeFalsy();
        });
    });
})();