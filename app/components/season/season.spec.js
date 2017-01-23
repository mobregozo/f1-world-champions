(function() {

    'use strict';

    describe('Controller: SeasonListCtrl', function() {

        // load the controller's module
        beforeEach(module('f1WorldChampions'));

        var SeasonListCtrl, myScope, state;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope, $stateParams) {
            myScope = $rootScope.$new();
            SeasonListCtrl = $controller('SeasonListCtrl', {
                $scope: myScope
            })
            state = $stateParams;
        }));

        it('should Controller injected', function() {
            expect(SeasonListCtrl).toBeDefined();
        });

        it('should attach a list of awesomeThings to the scope', function() {
            expect(SeasonListCtrl.seasonList.length).toBe(0);
            expect(SeasonListCtrl.loadedResults).toBeFalsy();
        });
    });

    describe('Controller: SeasonRacesCtrl', function() {

        // load the controller's module
        beforeEach(module('f1WorldChampions'));

        var SeasonRacesCtrl, myScope, state;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope, $stateParams) {
            myScope = $rootScope.$new();
            SeasonRacesCtrl = $controller('SeasonRacesCtrl', {
                $scope: myScope
            });
            state = $stateParams;
        }));

        it('should Controller injected', function() {
            expect(SeasonRacesCtrl).toBeDefined();
        });

        it('should be defined', function() {
            expect(SeasonRacesCtrl.championDriver).toEqual({});
            expect(SeasonRacesCtrl.winnerList.length).toEqual(0);
            expect(SeasonRacesCtrl.loadedWinners).toBeFalsy();
            expect(SeasonRacesCtrl.loadedChampion).toBeFalsy();
        });
    });

    describe('Controller: SeasonRaceCtrl', function() {

        // load the controller's module
        beforeEach(module('f1WorldChampions'));

        var SeasonRaceCtrl, myScope, state;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope, $stateParams) {
            myScope = $rootScope.$new();
            SeasonRaceCtrl = $controller('SeasonRaceCtrl', {
                $scope: myScope
            });
            state = $stateParams;
        }));

        it('should Controller injected', function() {
            expect(SeasonRaceCtrl).toBeDefined();
        });

        it('should be defined', function() {
            expect(SeasonRaceCtrl.raceData).toEqual([]);
            expect(SeasonRaceCtrl.loadedWinners).toBeFalsy();
        });
    });

})();