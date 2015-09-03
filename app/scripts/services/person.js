'use strict';

/**
 * @ngdoc service
 * @name billsplitApp.Person
 * @description
 * # Person
 * Factory in the billsplitApp.
 */
angular.module('billsplitApp')
  .factory('Person', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
