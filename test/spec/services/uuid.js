'use strict';

describe('Service: uuid', function () {

  // load the service's module
  beforeEach(module('billsplitApp'));

  // instantiate service
  var uuid;
  beforeEach(inject(function (_uuid_) {
    uuid = _uuid_;
  }));

  it('should do something', function () {
    expect(!!uuid).toBe(true);
  });

});
