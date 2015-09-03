'use strict';

describe('Service: bill', function () {

  // load the service's module
  beforeEach(module('billsplitApp'));

  // instantiate service
  var bill;
  beforeEach(inject(function (_bill_) {
    bill = _bill_;
  }));

  it('should do something', function () {
    expect(!!bill).toBe(true);
  });

});
