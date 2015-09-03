'use strict';

describe('Service: DiscountItem', function () {

  // load the service's module
  beforeEach(module('billsplitApp'));

  // instantiate service
  var DiscountItem;
  beforeEach(inject(function (_DiscountItem_) {
    DiscountItem = _DiscountItem_;
  }));

  it('should do something', function () {
    expect(!!DiscountItem).toBe(true);
  });

});
