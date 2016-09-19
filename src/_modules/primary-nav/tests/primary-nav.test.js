'use strict';

import PrimaryNav from '../primary-nav';

describe('PrimaryNav View', function() {

  beforeEach(() => {
    this.primaryNav = new PrimaryNav();
  });

  it('Should run a few assertions', () => {
    expect(this.primaryNav).toBeDefined();
  });

});
