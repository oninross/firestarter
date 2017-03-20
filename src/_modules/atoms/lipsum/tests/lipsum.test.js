'use strict';

import Lipsum from '../lipsum';

describe('Lipsum View', function() {

  beforeEach(() => {
    this.lipsum = new Lipsum();
  });

  it('Should run a few assertions', () => {
    expect(this.lipsum).toBeDefined();
  });

});
