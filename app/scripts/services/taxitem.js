'use strict';

/**
 * @ngdoc service
 * @name billsplitApp.TaxItem
 * @description
 * # TaxItem
 * Factory in the billsplitApp.
 */
angular.module('billsplitApp')
    .factory('TaxItem', ['Item', function(Item) {
        // Service logic
        // ...
        var TaxItem = function() {
            this.setType("TaxItem");
            this.init.apply(this, arguments);
        };
        //inherit from item
        TaxItem.prototype = new Item();

        TaxItem.prototype.init = function(name, description, price, id) {
            this.setId(id);
            this.setName(name);
            this.setDescription(description);
            this.setPrice(price);
        };

        TaxItem.prototype.setPrice = function(price) {
            if (typeof price != 'undefined' && price != null && !isNaN(price)) {
                this.price = price;
            }
        };

        return TaxItem;

    }]);
