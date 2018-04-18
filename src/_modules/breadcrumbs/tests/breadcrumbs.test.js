'use strict';

import Breadcrumbs from '../breadcrumbs';

describe('Breadcrumbs View', function() {

  beforeEach(() => {
    this.breadcrumbs = new Breadcrumbs();
  });

  it('Should run a few assertions', () => {
    expect(this.breadcrumbs).toBeDefined();
  });

});
