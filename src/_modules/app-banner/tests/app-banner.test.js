'use strict';

import AppBanner from '../app-banner';

describe('AppBanner View', function() {

  beforeEach(() => {
    this.appBanner = new AppBanner();
  });

  it('Should run a few assertions', () => {
    expect(this.appBanner);
  });

});
