'use strict';

describe('Directive: itemform', function () {

  // load the directive's module
  beforeEach(module('billsplitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<itemform></itemform>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the itemform directive');
  }));
});
