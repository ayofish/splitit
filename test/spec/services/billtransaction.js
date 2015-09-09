'use strict';

describe('Service: BillTransaction', function () {

  // load the service's module
  beforeEach(module('billsplitApp'));

  // instantiate service
  var BillTransaction;
  beforeEach(inject(function (_BillTransaction_) {
    BillTransaction = _BillTransaction_;
  }));

  it('should do something', function () {
    expect(!!BillTransaction).toBe(true);
  });

});
