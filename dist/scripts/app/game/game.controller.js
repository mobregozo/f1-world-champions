(function() {
    'use strict';

    var controller = [
        function() {
            var vm = this;

            vm.saveGame = function(){
                //TODO:saveGame
                console.log('game is being saved');
            };
        }
    ];

    angular.module('f1WorldChampions.game').controller('GameCtrl', controller);
})();
