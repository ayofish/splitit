'use strict';

/**
 * @ngdoc service
 * @name billsplitApp.Person
 * @description
 * # Person
 * Factory in the billsplitApp.
 */
angular.module('billsplitApp')
    .factory('Person', ['uuid', function(uuid) {

        var Person = function() {
            this.name = "";
            this.items = {};
            this.init.apply(this, arguments);
        };

        Person.prototype = {
            name: null,
            items: null,
            init: function(name) {
                this.setId();
                this.setName(name);
            },
            setId: function(id) {
                if (typeof id !== 'undefined' && id !== null && id !== "") {
                    this.id = id;
                } else {
                    this.id = uuid();
                }

            },
            getId: function() {
                return this.id;
            },
            getName: function() {
                return this.name;
            },
            setName: function(name) {
                if (typeof name !== 'undefined' && name !== null) {
                    this.name = name;
                }
            }
        };

        return Person;
    }]);
