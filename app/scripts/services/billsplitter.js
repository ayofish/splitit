'use strict';

/**
 * @ngdoc service
 * @name billsplitApp.BillSplitter
 * @description
 * # BillSplitter
 * Factory in the billsplitApp.
 */
angular.module('billsplitApp')
    .factory('BillSplitter', [
        'uuid', 'BillTransaction', 'Item', 'DiscountItem', 'TaxItem', 'Person',
        function(uuid, BillTransaction, Item, DiscountItem, TaxItem, Person) {
            // Service logic
            // ...

            var BillSplitter = function() {
                this.init.apply(this, arguments);
            };

            BillSplitter.prototype = {
                id: null,
                bill: null,
                persons: {},
                init: function(bill) {
                    this.setId();
                    this.setBill(bill);
                },
                getId: function() {
                    return this.id;
                },
                setId: function(id) {
                    if (typeof id !== 'undefined' && id !== null && id !== "") {
                        this.id = id;
                    } else {
                        this.id = uuid();
                    }
                },

                getBill: function() {
                    return this.bill;
                },

                setBill: function(bill) {
                    if (typeof bill !== 'undefined' && bill !== null) {
                        this.bill = bill;
                    }
                },

                getPersons: function() {
                    return this.persons;
                },
                addPerson: function(person) {
                    this.persons[person.getId()] = person;
                },
                getPerson: function(personId) {
                    if (typeof this.persons[personId] !== 'undefined' && this.persons[personId] !== null) {
                        return this.persons[personId];
                    } else {
                        return null;
                    }
                },
                getPersonsArr: function() {
                    var personsArr = [];
                    var persons = this.getPersons();
                    for (var personId in persons) {
                        personsArr.push(persons[personId]);
                    }
                    return personsArr;
                },
                removePerson: function(personId) {
                    if (this.getPerson(personId) !== null) {
                        delete this.persons[personId];
                    }
                },

                getEqualSplit: function() {
                    var splitData = [];
                    var bill = this.getBill();
                    var persons = this.getPersonsArr();
                    var total = bill.getTotal();
                    var share = total / persons.length;
                    for (var i = 0; i < persons.length; i++) {
                        splitData.push({
                            person: persons[i],
                            share: share
                        });
                    }
                    return splitData;
                },

                getByItemSplit: function() {
                    var splitData = [];
                    return splitData;
                }

            };

            // Public API here
            return BillSplitter;
        }
    ]);
