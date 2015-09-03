'use strict';

/**
 * @ngdoc service
 * @name billsplitApp.DiscountItem
 * @description
 * # DiscountItem
 * Factory in the billsplitApp.
 */
angular.module('billsplitApp')
    .factory('DiscountItem', ['Item', function(Item) {
        // Service logic
        // ...
        var DiscountItem = function() {
          this.setType("DiscountItem");
            this.init.apply(this, arguments);
        };
        //inherit from item
        DiscountItem.prototype = new Item();

        DiscountItem.prototype.init = function(name, description, price, id) {
            this.setId();
            this.setName(name);
            this.setDescription(description);
            this.setPrice(price);
        };

        DiscountItem.prototype.setPrice = function(price) {
            if (typeof price != 'undefined' && price != null && !isNaN(price)) {
                this.price = -price;
            }
        };

        return DiscountItem;

    }]);
