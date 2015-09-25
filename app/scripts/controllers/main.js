'use strict';

/**
 * @ngdoc function
 * @name billsplitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the billsplitApp
 */
angular.module('billsplitApp')
    .controller('MainCtrl', [
        '$scope', 'Item', 'DiscountItem', "TaxItem", 'BillTransaction', 'Person', 'BillSplitter', 'ChargeItem',
        function($scope, Item, DiscountItem, TaxItem, BillTransaction, Person, BillSplitter, ChargeItem) {
            var person1 = new Person("Ayo");
            var person2 = new Person("Clare");
            var person3 = new Person("Cara");
            var person4 = new Person("Mama");
            var items = [
                new Item("pizza", "pizza", 400), 
                new Item("fries", "fries", 400),               
                new Item("nuggets", "nuggets", 400),
                new Item("sundae", "sundae", 100),
                new DiscountItem("dc item 1", "dc", 100),
                new TaxItem("tax item 1", "tax", 400),
                new ChargeItem("serviceCharge", "serviceCharge", 400)
            ];

            var bill = new BillTransaction("test bill", new Date());
            bill.addItems(items);
            
            var billSplit = new BillSplitter(bill);
            billSplit.addPerson(person1);
            billSplit.addPerson(person2);
            billSplit.addPerson(person3);
            billSplit.addPerson(person4);

            //add items to split on
            //share a pizza
            billSplit.addItemShare(items[0].getId(), person1.getId());
            billSplit.addItemShare(items[0].getId(), person2.getId());
            billSplit.addItemShare(items[0].getId(), person3.getId());
            billSplit.addItemShare(items[0].getId(), person4.getId());
            //share fries with everyone
            billSplit.addItemShare(items[1].getId(), person1.getId());
            billSplit.addItemShare(items[1].getId(), person2.getId());
            billSplit.addItemShare(items[1].getId(), person3.getId());
            billSplit.addItemShare(items[1].getId(), person4.getId());
            //share nuggets
            billSplit.addItemShare(items[2].getId(), person1.getId());
            billSplit.addItemShare(items[2].getId(), person2.getId());
            billSplit.addItemShare(items[2].getId(), person3.getId());
            billSplit.addItemShare(items[2].getId(), person4.getId());
            //sundae all alone
            billSplit.addItemShare(items[3].getId(), person4.getId());

            $scope.billName = bill.getName();
            $scope.billDate = bill.getDate().toString();
            $scope.items = bill.getSubTotalItemsArr();
            //totals
            $scope.total = bill.getTotal().toFixed(2);
            $scope.discountTotal = bill.getTotalDiscount().toFixed(2);
            $scope.taxTotal = bill.getTotalTax().toFixed(2);
            $scope.subtotal = bill.getSubTotal().toFixed(2);
            $scope.chargeTotal = bill.getTotalCharges().toFixed(2);
            //add on to bill
            $scope.discountItems = bill.getDiscountItemsArr();
            $scope.taxItems = bill.getTaxItemsArr();
            $scope.chargeItems = bill.getChargeItemsArr();

            $scope.splitData = billSplit.getEqualSplit();
            $scope.splitDataByItem = billSplit.getByItemSplit();

        }
    ]);
