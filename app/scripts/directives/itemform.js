'use strict';

/**
 * @ngdoc directive
 * @name billsplitApp.directive:itemform
 * @description
 * # itemform
 */
angular.module('billsplitApp')
  .directive('itemform', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the itemform directive');
      }
    };
  });
