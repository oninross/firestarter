'use strict';

import StandardBanner from '../standard-banner';

describe('StandardBanner View', function() {

  beforeEach(() => {
    this.standardBanner = new StandardBanner();
  });

  it('Should run a few assertions', () => {
    expect(this.standardBanner).toBeDefined();
  });

});
