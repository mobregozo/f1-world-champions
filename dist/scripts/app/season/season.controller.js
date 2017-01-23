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
        vm.sortType = 'season';
        vm.sortReverse = false;
        vm.sortOption = sortOption;

        activate();

        function sortOption(item) {
            switch (vm.sortType) {
                case 'points':
                    return Number(item.DriverStandings[0].points);
                case 'wins':
                    return Number(item.DriverStandings[0].wins);
                case 'familyName':
                    return item.DriverStandings[0].Driver.familyName;
                case 'name':
                    return item.DriverStandings[0].Constructors[0].name;
                default:
                    return item.raceName;
            }
        }

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
        vm.sortType = 'raceName';
        vm.sortReverse = false;
        vm.getWinners = getWinners;
        vm.getChampion = getChampion;
        vm.sortOption = sortOption;
        activate();

        // Get data onde view is loaded
        function activate() {
            getWinners();
            getChampion();
        }

        function sortOption(item) {
            switch (vm.sortType) {
                case 'raceName':
                    return item.raceName;
                case 'circuitName':
                    return item.Circuit.circuitName;
                case 'familyName':
                    return item.Results[0].Driver.familyName;
                default:
                    return item.raceName;
            }
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