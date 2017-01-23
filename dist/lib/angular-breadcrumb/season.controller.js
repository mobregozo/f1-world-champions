(function() {
    'use strict';

    angular.module('f1WorldChampions.season').controller('SeasonListCtrl', SeasonListController);
    angular.module('f1WorldChampions.season').controller('SeasonRacesCtrl', SeasonRacesController);
    angular.module('f1WorldChampions.season').controller('SeasonRaceCtrl', SeasonRaceController);


    SeasonListController.$inject = ['seasonService'];

    function SeasonListController(seasonService) {
        var vm = this;
        vm.seasonList = [];
        vm.loadedResults = false;

        activate();

        function activate() {
            return getSeasons();
        }

        function getSeasons() {
            return seasonService.getSeasons().then(function(data) {
                vm.seasonList = data;
                vm.loadedResults = true;
            });
        }
    }

    SeasonRacesController.$inject = ['seasonService', '$stateParams', '$http'];

    function SeasonRacesController(seasonService, $stateParams, $http) {
        var vm = this;
        vm.seasonSelected = $stateParams.seasonId;
        vm.championDriver = {};
        vm.winnerList = [];
        vm.loadedWinners = false;
        vm.loadedChampion = false;
        vm.getWinners = getWinners;
        vm.getChampion = getChampion;
        activate();

        // Get data onde view is loaded
        function activate() {
            getWinners();
            getChampion();
        }


        //Get Season Winners
        function getWinners() {
            return seasonService.getSeasonWinners($stateParams.seasonId).then(function(data) {
                vm.winnerList = data;
                vm.loadedWinners = true;
            });
        }

        //Get Champion Driver of the Season
        function getChampion() {
            return seasonService.getSeasonChampion($stateParams.seasonId).then(function(data) {
                vm.championDriver = data;
                vm.loadedChampion = true;
            });
        }
    }



    SeasonRaceController.$inject = ['seasonService', '$stateParams', '$http', '$sce'];

    function SeasonRaceController(seasonService, $stateParams, $http, $sce) {
        var vm = this;
        vm.raceSelected = $stateParams.raceId;
        vm.raceData = [];
        vm.loadedWinners = false;
        vm.getRaceData = getRaceData;
        activate();

        // Get data onde view is loaded
        function activate() {
            getRaceData();
        }

        //Get Race Winners
        function getRaceData() {
            return seasonService.getRaceData($stateParams.seasonId, $stateParams.raceId).then(function(data) {
                vm.raceData = data;
                vm.loadedWinners = true;
            });
        }
    }

})();