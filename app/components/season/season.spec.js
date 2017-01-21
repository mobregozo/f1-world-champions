(function() {

    'use strict';

    describe('Controller: SeasonCtrl', function() {

        // load the controller's module
        beforeEach(module('f1WorldChampions'));

        var SeasonCtrl, myScope;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope) {
            myScope = $rootScope.$new();
            SeasonCtrl = $controller('SeasonCtrl', {
                $scope: myScope
            });
        }));

        it('should Controller injected', function() {
            expect(SeasonCtrl).toBeDefined();
        });

        it('should attach a list of awesomeThings to the scope', function() {
            expect(SeasonCtrl.saveGame).toBeDefined();
        });
    });

})();