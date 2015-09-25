'use strict';

describe('Service: ChargeItem', function () {

  // load the service's module
  beforeEach(module('billsplitApp'));

  // instantiate service
  var ChargeItem;
  beforeEach(inject(function (_ChargeItem_) {
    ChargeItem = _ChargeItem_;
  }));

  it('should do something', function () {
    expect(!!ChargeItem).toBe(true);
  });

});
