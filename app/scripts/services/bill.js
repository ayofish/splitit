'use strict';

/**
 * @ngdoc service
 * @name billsplitApp.bill
 * @description
 * # bill
 * Service in the billsplitApp.
 */
angular.module('billsplitApp')
    .service('bill', function() {
        this.items = {};
        // AngularJS will instantiate a singleton by calling "new" on this function

        this.addItems = function(arrItems) {
            for (var i = 0; i < arrItems.length; i++) {
                this.addItem(arrItems[i]);
            }
        };

        this.addItem = function(item) {
            this.items[item.getId()] = item;
        };

        this.getItem = function(itemId) {
            return this.items[itemId];
        };

        this.removeItem = function(itemId) {
            delete this.items[itemId];
        };

        this.updateItem = function(item) {
            this.items[item.getId()] = item;
        };

        this.getItems = function() {
            return this.items;
        };

        this.getItemsArr = function() {
            var itemsArr = [];
            for (var itemId in this.items) {
                itemsArr.push(this.items[itemId]);
            }
            return itemsArr;
        };

        this.getDiscountItemsArr = function() {
            var discountItems = [];
            for (var itemId in this.items) {
                if (this.items[itemId].getType() == "DiscountItem") {
                    discountItems.push(this.items[itemId]);
                }
            }
            return discountItems;
        };

        this.getTaxItemsArr = function() {
            var taxItems = [];
            for (var itemId in this.items) {
                if (this.items[itemId].getType() == "TaxItem") {
                    taxItems.push(this.items[itemId]);
                }
            }
            return taxItems;
        };

        this.getSubTotalItemsArr = function() {
            var subTotalItemsArr = [];
            for (var itemId in this.items) {
                var item = this.items[itemId];
                if (item.getType() != "DiscountItem" && item.getType() != "TaxItem") {
                    subTotalItemsArr.push(item);
                }
            }
            return subTotalItemsArr;
        };

        this.getSubTotal = function() {
            var subTotal = 0.00;
            for (var itemId in this.items) {
                var item = this.items[itemId];
                if (item.getType() != "DiscountItem" && item.getType() != "TaxItem") {
                    subTotal = subTotal + this.items[itemId].getPrice();
                }
            }
            return subTotal;
        };

        this.getTotal = function() {
            var total = 0.00;
            for (var itemId in this.items) {
                total = total + this.items[itemId].getPrice();
            }
            return total;
        };

        this.getTotalDiscount = function() {
            var total = 0.00;
            for (var itemId in this.items) {
                if (this.items[itemId].getType() == "DiscountItem") {
                    total = total + this.items[itemId].getPrice();
                }
            }
            return total;
        };

        this.getTotalTax = function() {
            var total = 0.00;
            for (var itemId in this.items) {
                if (this.items[itemId].getType() == "TaxItem") {
                    total = total + this.items[itemId].getPrice();
                }
            }
            return total;
        };
    });
