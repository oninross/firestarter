'use strict';

import Galisteners from '../galisteners';

describe('Galisteners View', function() {

  beforeEach(() => {
    this.galisteners = new Galisteners();
  });

  it('Should run a few assertions', () => {
    expect(this.galisteners).toBeDefined();
  });

});
