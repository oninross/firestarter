'use strict';

import Banner from '../banner';

describe('Banner View', function() {

  beforeEach(() => {
    this.banner = new Banner();
  });

  it('Should run a few assertions', () => {
    expect(this.banner).toBeDefined();
  });

});
