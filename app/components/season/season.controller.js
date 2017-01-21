(function() {
    'use strict';

    angular.module('f1WorldChampions.season').controller('SeasonListCtrl', seasonListController);
    angular.module('f1WorldChampions.season').controller('SeasonDetailCtrl', seasonDetailController);

    seasonListController.$inject = ['seasonService'];

    function seasonListController(seasonService) {
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

    seasonDetailController.$inject = ['seasonService', '$stateParams'];

    function seasonDetailController(seasonService, $stateParams) {
        var vm = this;
        vm.seasonSelected = $stateParams.seasonId;
        vm.getWinners = getWinners;
        vm.getChampion = getChampion;
        vm.championDriver = {};
        vm.winnerList = [];
        vm.loadedWinners = false;
        vm.loadedChampion = false;
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

})();