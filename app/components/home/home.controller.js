(function() {
    'use strict';

    angular.module('f1WorldChampions.home').controller('HomeCtrl', HomeController);


    HomeController.$inject = ['carouselConfig'];

    function HomeController(carouselConfig) {
        var vm = this;
        vm.images = carouselConfig.IMAGES;
        vm.myInterval = carouselConfig.INVERVAL;
        vm.noWrapSlides = false;
        vm.active = 0;
    }

})();