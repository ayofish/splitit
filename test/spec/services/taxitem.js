'use strict';

describe('Service: TaxItem', function () {

  // load the service's module
  beforeEach(module('billsplitApp'));

  // instantiate service
  var TaxItem;
  beforeEach(inject(function (_TaxItem_) {
    TaxItem = _TaxItem_;
  }));

  it('should do something', function () {
    expect(!!TaxItem).toBe(true);
  });

});
