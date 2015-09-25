'use strict';

/**
 * @ngdoc service
 * @name billsplitApp.BillTransaction
 * @description
 * # BillTransaction
 * Factory in the billsplitApp.
 */
angular.module('billsplitApp')
    .factory('BillTransaction', ['uuid', 'Item', 'DiscountItem', 'TaxItem', function(uuid, Item, DiscountItem, TaxItem) {
        // Service logic
        // ...

        var BillTransaction = function() {
            this.name = "";
            this.date = null;
            this.items = {};
            this.init.apply(this, arguments);
        };

        BillTransaction.prototype = {
            name: null,
            date: null,
            items: null,
            init: function(name, date) {
                this.setId();
                this.setName(name);
                this.setDate(date);
            },
            getId: function() {
                return this.id;
            },
            getDate: function() {
                return this.date;
            },
            getName: function() {
                return this.name;
            },

            setId: function(id) {
                if (typeof id !== 'undefined' && id !== null && id !== "") {
                    this.id = id;
                } else {
                    this.id = uuid();
                }
            },
            setDate: function(date) {
                if (typeof date !== 'undefined' && date !== null) {
                    this.date = date;
                } else {
                    this.date = new Date();
                }
            },
            setName: function(name) {
                if (typeof name !== 'undefined' && name !== null) {
                    this.name = name;
                }
            },
            addItem: function(item) {
                this.items[item.getId()] = item;
            },
            removeItem: function(itemId) {
                if (this.getItem(itemId) !== null) {
                    delete this.items[itemId];
                }
            },
            getItem: function(itemId) {
                if (typeof itemId !== 'undefined' && itemId !== null) {
                    return this.items[itemId];
                } else {
                    return null;
                }
            },
            updateItem: function(item) {
                this.addItem(item);
            },
            addItems: function(arrItems) {
                for (var i = 0; i < arrItems.length; i++) {
                    this.addItem(arrItems[i]);
                }
            },
            getItems: function() {
                return this.items;
            },

            getItemsArr: function() {
                var itemsArr = [];
                var items = this.getItems();
                for (var itemId in items) {
                    itemsArr.push(items[itemId]);
                }
                return itemsArr;
            },

            getDiscountItemsArr: function() {
                var discountItems = [];
                var items = this.getItems();
                for (var itemId in items) {
                    var item = items[itemId];
                    if (item !== null && item.getType() === "DiscountItem") {
                        discountItems.push(item);
                    }
                }
                return discountItems;
            },

            getTaxItemsArr: function() {
                var taxItems = [];
                var items = this.getItems();
                for (var itemId in items) {
                    var item = items[itemId];
                    if (item !== null && item.getType() === "TaxItem") {
                        taxItems.push(item);
                    }
                }
                return taxItems;
            },

            getChargeItemsArr: function() {
                var chargeItems = [];
                var items = this.getItems();
                for (var itemId in items) {
                    var item = items[itemId];
                    if (item !== null && item.getType() === "ChargeItem") {
                        chargeItems.push(item);
                    }
                }
                return chargeItems;
            },

            getSubTotalItemsArr: function() {
                var subTotalItemsArr = [];
                var items = this.getItems();
                for (var itemId in items) {
                    var item = items[itemId];
                    if (item.getType() !== "DiscountItem" && item.getType() !== "TaxItem" && item.getType() !== "ChargeItem") {
                        subTotalItemsArr.push(item);
                    }
                }
                return subTotalItemsArr;
            },

            getSubTotal: function() {
                var subTotal = 0.00;
                var items = this.getSubTotalItemsArr();
                for (var i = 0; i < items.length; i++) {
                    subTotal = subTotal + items[i].getPrice();
                }
                return subTotal;
            },

            getTotal: function() {
                var total = 0.00;
                var items = this.getItemsArr();
                for (var i = 0; i < items.length; i++) {
                    total = total + items[i].getPrice();
                }
                return total;
            },

            getTotalDiscount: function() {
                var total = 0.00;
                var items = this.getDiscountItemsArr();
                for (var i = 0; i < items.length; i++) {
                    total = total + items[i].getPrice();
                }
                return total;
            },

            getTotalTax: function() {
                var total = 0.00;
                var items = this.getTaxItemsArr();
                for (var i = 0; i < items.length; i++) {
                    total = total + items[i].getPrice();
                }
                return total;
            },

            getTotalCharges: function() {
                var total = 0.00;
                var items = this.getChargeItemsArr();
                for (var i = 0; i < items.length; i++) {
                    total = total + items[i].getPrice();
                }
                return total;
            }
        };

        // Public API here
        return BillTransaction;
    }]);
