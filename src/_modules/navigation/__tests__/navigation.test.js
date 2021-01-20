'use strict';

import Navigation from '../navigation';

describe('Navigation View', function() {

  beforeEach(() => {
    this.navigation = new Navigation();
  });

  it('Should run a few assertions', () => {
    expect(this.navigation).toBeDefined();
  });

});
