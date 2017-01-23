(function() {
    'use strict';

    angular.module('f1WorldChampions.driver').controller('DriverListCtrl', DriverListController);
    angular.module('f1WorldChampions.driver').controller('DriverDetailCtrl', DriverDetailController);


    //Driver List Controller
    DriverListController.$inject = ['driverService', 'driverLimit'];

    function DriverListController(driverService, driverLimit) {
        var vm = this;
        vm.driverList = [];
        vm.loadedResults = false;
        vm.table = { currentPage: 1, offset: 0, totalItems: 0, size: driverLimit.LIMIT };
        vm.getDrivers = getDrivers();
        vm.pageChange = pageChange;
        activate();

        // Get data once  view is loaded
        function activate() {
            return getDrivers();
        }

        //Page is updated
        function pageChange() {
            vm.loadedResults = false;
            getDrivers();
        }

        //Get list of drivers
        function getDrivers() {
            return driverService.getDrivers(vm.table.currentPage).then(function(data) {
                vm.driverList = data.list;
                vm.table.totalItems = Number(data.total);
                vm.loadedResults = true;
            });
        }
    }


    //Driver Detail Controller
    DriverDetailController.$inject = ['driverService', '$stateParams', '$http'];

    function DriverDetailController(driverService, $stateParams, $http) {
        var vm = this;
        vm.driverSelected = $stateParams.driverId;
        vm.driverData = {};
        vm.loadedDriverInfo = false;
        vm.getDriverInfo = getDriverInfo;
        activate();

        // Get data once  view is loaded
        function activate() {
            getDriverInfo();
        }

        //Get Driver Information
        function getDriverInfo() {
            return driverService.getDriverInfo($stateParams.driverId).then(function(data) {
                vm.driverData = data;
                vm.loadedDriverInfo = true;
            });
        }
    }

})();