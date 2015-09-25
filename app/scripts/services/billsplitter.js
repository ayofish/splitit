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
                this.itemsShare = {};
                this.persons = {};

                this.init.apply(this, arguments);
            };

            BillSplitter.prototype = {
                id: null,
                bill: null,
                persons: null,
                itemsShare: null,
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
                addItemShare: function(itemId, personId) {
                    if (this.getItemShare(itemId) === null) {
                        this.itemsShare[itemId] = {
                            shares: []
                        };
                    }
                    this.itemsShare[itemId].shares.push({
                        personId: personId,
                        amount: 0
                    });
                },
                removeItemShare: function(itemId) {
                    if (this.getItemShare(itemId) !== null) {
                        delete this.itemsShare[itemId];
                    }
                },
                getItemShare: function(itemId) {
                    if (typeof itemId !== 'undefined' && itemId !== null && typeof this.itemsShare[itemId] !== 'undefined') {
                        return this.itemsShare[itemId];
                    } else {
                        return null;
                    }
                },
                getItemsShare: function() {
                    return this.itemsShare;
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
                setShareForCharges: function() {
                    var bill = this.getBill();
                    var persons = this.getPersonsArr();
                    var chargeItems = bill.getChargeItemsArr();
                    for (var i = 0; i < persons.length; i++) {
                        for (var x = 0; x < chargeItems.length; x++) {
                            this.addItemShare(chargeItems[x].getId(), persons[i].getId());
                        }
                    }
                },
                setShareForTaxes: function() {
                    var bill = this.getBill();
                    var persons = this.getPersonsArr();
                    var taxItems = bill.getTaxItemsArr();
                    for (var i = 0; i < persons.length; i++) {
                        for (var x = 0; x < taxItems.length; x++) {
                            this.addItemShare(taxItems[x].getId(), persons[i].getId());
                        }
                    }
                },
                setShareForDiscounts: function() {
                    var bill = this.getBill();
                    var persons = this.getPersonsArr();
                    var discountItems = bill.getDiscountItemsArr();
                    for (var i = 0; i < persons.length; i++) {
                        for (var x = 0; x < discountItems.length; x++) {
                            this.addItemShare(discountItems[x].getId(), persons[i].getId());
                        }
                    }
                },
                getByItemSplit: function() {
                    this.setShareForCharges();
                    this.setShareForTaxes();
                    this.setShareForDiscounts();
                    var splitData = [];
                    var bill = this.getBill();
                    var itemsShare = this.getItemsShare();
                    var oSplitInfo = {};
                    for (var itemId in itemsShare) {
                        var shares = this.getItemShare(itemId).shares;
                        var item = bill.getItem(itemId);
                        var sharePrice = item.getPrice() / shares.length;
                        for (var i = 0; i < shares.length; i++) {
                            var share = shares[i];
                            var person = this.getPerson(share.personId);
                            if (typeof oSplitInfo[person.getId()] === "undefined") {
                                oSplitInfo[person.getId()] = {
                                    person: person,
                                    share: 0,
                                    items: []
                                };
                            }
                            item.sharePrice = sharePrice;
                            oSplitInfo[person.getId()].items.push(item);
                            oSplitInfo[person.getId()].share += sharePrice;
                        }
                    }
                    for (var key in oSplitInfo) {
                        splitData.push({
                            person: oSplitInfo[key].person,
                            share: oSplitInfo[key].share,
                            items: oSplitInfo[key].items
                        })
                    }
                    return splitData;
                }
            };

            // Public API here
            return BillSplitter;
        }
    ]);
