'use strict';

describe('Service: BillSplitter', function () {

  // load the service's module
  beforeEach(module('billsplitApp'));

  // instantiate service
  var BillSplitter;
  beforeEach(inject(function (_BillSplitter_) {
    BillSplitter = _BillSplitter_;
  }));

  it('should do something', function () {
    expect(!!BillSplitter).toBe(true);
  });

});
