'use strict';

/**
 * @ngdoc service
 * @name billsplitApp.uuid
 * @description
 * # uuid
 * Factory in the billsplitApp.
 */
angular.module('billsplitApp')
    .factory('uuid', function() {
        // Service logic
        // ...
        var generatedIds = [];

        function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            generatedIds.push()
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }

        return function() {
            var uuid = null;
            do {
                uuid = guid();
            } while (generatedIds.indexOf(uuid) != -1);

            return uuid;
        };
    });
