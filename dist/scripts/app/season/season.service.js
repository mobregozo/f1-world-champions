(function() {
    'use strict';

    angular
        .module('f1WorldChampions.season')
        .factory('seasonService', dataservice);

    dataservice.$inject = ['$http', 'config', 'seasonLimit'];

    function dataservice($http, config, seasonLimit) {
        return {
            getSeasons: getSeasons,
            getSeasonChampion: getSeasonChampion,
            getSeasonWinners: getSeasonWinners,
            getRaceData: getRaceData

        };

        function getSeasons() {
            return $http.get(config.url + 'driverStandings/1' + config.format, {
                    params: {
                        offset: seasonLimit.FROM,
                        limit: seasonLimit.LIMIT
                    }
                })
                .then(getSeasonsComplete)
                .catch(getSeasonsFailed);

            function getSeasonsComplete(response) {
                return response.data.MRData.StandingsTable.StandingsLists;
            }

            function getSeasonsFailed(error) {
                console.error('XHR Failed for get Season ' + error.data);
            }
        }

        function getSeasonWinners(seasonYear) {
            return $http.get(config.url + seasonYear + '/results/1' + config.format)
                .then(getSeasonWinnersComplete)
                .catch(getSeasonWinnersFailed);

            function getSeasonWinnersComplete(response) {
                return response.data.MRData.RaceTable.Races;
            }

            function getSeasonWinnersFailed(error) {
                console.error('XHR Failed for get Season Winners' + error.data);
            }
        }

        function getSeasonChampion(seasonYear) {
            return $http.get(config.url + seasonYear + '/driverStandings/1' + config.format)
                .then(getSeasonChampionComplete)
                .catch(getSeasonChampionFailed);

            function getSeasonChampionComplete(response) {
                return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;
            }

            function getSeasonChampionFailed(error) {
                console.error('XHR Failed for get Season Champion' + error.data);
            }
        }

        function getRaceData(seasonYear, roundNumber) {
            return $http.get(config.url + seasonYear + '/' + roundNumber + '/results' + config.format)
                .then(getRaceDataComplete)
                .catch(getRaceDataFailed);

            function getRaceDataComplete(response) {
                return response.data.MRData.RaceTable.Races[0];
            }

            function getRaceDataFailed(error) {
                console.error('XHR Failed for get Race Winners' + error.data);
            }
        }
    }
})();

//http://ergast.com/api/f1/2013/results/1.json  ganador de todas las carreras
//http://ergast.com/api/f1/2013/driverStandings/1.json ganador de la temporada