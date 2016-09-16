'use strict';

import Link from '../link';

describe('Link View', function() {

  beforeEach(() => {
    this.link = new Link();
  });

  it('Should run a few assertions', () => {
    expect(this.link).toBeDefined();
  });

});
