(function() {
    'use strict';

    angular.module('f1WorldChampions').factory('timeConverter', function() {
        return {
            msToTime: function(duration) {
                var milliseconds = parseInt((duration % 1000) / 100),
                    seconds = parseInt((duration / 1000) % 60),
                    minutes = parseInt((duration / (1000 * 60)));
                minutes = (minutes < 10) ? "0" + minutes : minutes;
                seconds = (seconds < 10) ? "0" + seconds : seconds;
                return minutes + ":" + seconds;
            }
        };
    });
})();
