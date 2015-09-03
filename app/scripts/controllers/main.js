'use strict';

/**
 * @ngdoc function
 * @name billsplitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the billsplitApp
 */
angular.module('billsplitApp')
  .controller('MainCtrl', ['$scope', 'Item', 'DiscountItem', "TaxItem",'bill',function ($scope, Item, DiscountItem, TaxItem, bill) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var items = [
    	new Item("test", "desc", 0), 
    	new DiscountItem("test1", "desc1", 1), 
    	new Item("test2", "desc2", 1), 
    	new Item("test3", "desc3", 1), 
    	new TaxItem("test4", "desc4", 1)
    ];
  	
    bill.addItems(items);

    $scope.items = bill.getSubTotalItemsArr();
    $scope.total = bill.getTotal().toFixed(2);
    $scope.discountTotal = bill.getTotalDiscount().toFixed(2);
    $scope.taxTotal = bill.getTotalTax().toFixed(2);
    $scope.subtotal = bill.getSubTotal().toFixed(2);
    $scope.discountItems = bill.getDiscountItemsArr();
    $scope.taxItems = bill.getTaxItemsArr();
  }]);
