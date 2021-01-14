'use strict';

import TablePreview from '../table-preview';

describe('TablePreview View', function() {

  beforeEach(() => {
    this.tablePreview = new TablePreview();
  });

  it('Should run a few assertions', () => {
    expect(this.tablePreview).toBeDefined();
  });

});
