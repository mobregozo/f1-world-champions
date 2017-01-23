(function() {

    'use strict';

    describe('Controller: DriverListCtrl', function() {

        // load the controller's module
        beforeEach(module('f1WorldChampions'));

        var DriverListCtrl, myScope, state;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope, $stateParams) {
            myScope = $rootScope.$new();
            state = $stateParams;
            DriverListCtrl = $controller('DriverListCtrl', {
                $scope: myScope
            });
            spyOn(DriverListCtrl, 'getDrivers');
        }));

        it('should Controller injected', function() {
            expect(DriverListCtrl).toBeDefined();
        });

        it('should DriverListCtrl default values', function() {
            expect(DriverListCtrl.loadedResults).toBeFalsy();
        });

        it('should DriverListCtrl default valuese', function() {
            DriverListCtrl.getDrivers();
            expect(DriverListCtrl.getDrivers).toHaveBeenCalled();
        });


    });

    describe('Controller: DriverDetailCtrl', function() {

        // load the controller's module
        beforeEach(module('f1WorldChampions'));

        var DriverDetailCtrl, myScope, state;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope, $stateParams) {
            myScope = $rootScope.$new();
            DriverDetailCtrl = $controller('DriverDetailCtrl', {
                $scope: myScope
            });
            state = $stateParams;
        }));

        it('should DriverDetailCtrl injected', function() {
            expect(DriverDetailCtrl).toBeDefined();
        });

        it('should DriverDetailCtrl default values', function() {
            expect(DriverDetailCtrl.driverData).toEqual({});
            expect(DriverDetailCtrl.loadedDriverInfo).toBeFalsy();
        });
    });

})();