'use strict';

/**
 * @ngdoc service
 * @name billsplitApp.item
 * @description
 * # item
 * Factory in the billsplitApp.
 */
angular.module('billsplitApp')
    .factory('Item', ['uuid', function(uuid) {
        // Service logic
        // ...

        var Item = function() {
            this.setType("Item");
            this.init.apply(this, arguments);
        };

        Item.prototype = {
            type: null,
            id: null,
            name: "",
            description: "",
            price: 0,
            init: function(name, description, price) {
                this.setId();
                this.setName(name);
                this.setDescription(description);
                this.setPrice(price);
            },
            getType: function() {
                return this.type;
            },
            getId: function() {
                return this.id;
            },
            getName: function() {
                return this.name;
            },
            getDescription: function() {
                return this.description;
            },
            getPrice: function() {
                return parseFloat(this.price);
            },
            setType: function(type) {
                this.type = type;
            },
            setId: function(id) {
                if (typeof id !== 'undefined' && id !== null && id !== "") {
                    this.id = id;
                } else {
                    this.id = uuid();
                }
            },
            setName: function(name) {
                if (typeof name !== 'undefined' && name !== null) {
                    this.name = name;
                }
            },
            setDescription: function(description) {
                if (typeof description !== 'undefined' && description !== null) {
                    this.description = description;
                }
            },
            setPrice: function(price) {
                if (typeof price !== 'undefined' && price !== null && !isNaN(price)) {
                    this.price = price;
                }
            }
        };

        // Public API here
        return Item;
    }]);
