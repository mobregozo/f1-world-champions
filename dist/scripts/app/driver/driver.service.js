(function() {
    'use strict';

    angular
        .module('f1WorldChampions.driver')
        .factory('driverService', dataservice);

    dataservice.$inject = ['$http', 'config', 'driverLimit'];

    function dataservice($http, config, driverLimit) {
        return {
            getDrivers: getDrivers,
            getDriverInfo: getDriverInfo

        };

        function getDrivers(page) {
            var offsetCalc = Number(driverLimit.LIMIT) * Number(page);
            return $http.get(config.url + 'drivers' + config.format, {
                    params: {
                        limit: driverLimit.LIMIT,
                        offset: offsetCalc
                    }
                })
                .then(getDriversComplete)
                .catch(getDriversFailed);

            function getDriversComplete(response) {
                return {
                    list: response.data.MRData.DriverTable.Drivers,
                    total: response.data.MRData.total
                };
            }

            function getDriversFailed(error) {
                console.error('XHR Failed for get Drivers List ' + error.data);
            }
        }

        function getDriverInfo(driverId) {
            return $http.get(config.url + 'drivers/' + driverId + config.format)
                .then(getDriverInfoComplete)
                .catch(getDriverInfoFailed);

            function getDriverInfoComplete(response) {
                return response.data.MRData.DriverTable.Drivers[0];
            }

            function getDriverInfoFailed(error) {
                console.error('XHR Failed for get Driver Info' + error.data);
            }
        }
    }
})();