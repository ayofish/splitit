'use strict';

/**
 * @ngdoc service
 * @name billsplitApp.ChargeItem
 * @description
 * # ChargeItem
 * Factory in the billsplitApp.
 */
angular.module('billsplitApp')
  .factory('ChargeItem', ['Item', function(Item) {
        // Service logic
        // ...
        var ChargeItem = function() {
            this.name = "";
            this.description = "";
            this.price = 0;
            this.setType("ChargeItem");
            this.init.apply(this, arguments);
        };
        //inherit from item
        ChargeItem.prototype = new Item();

        ChargeItem.prototype.init = function(name, description, price, id) {
            this.setId(id);
            this.setName(name);
            this.setDescription(description);
            this.setPrice(price);
        };

        ChargeItem.prototype.setPrice = function(price) {
            if (typeof price !== 'undefined' && price !== null && !isNaN(price)) {
                this.price = price;
            }
        };

        return ChargeItem;

    }]);
