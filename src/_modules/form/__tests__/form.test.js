'use strict';

import Form from '../form';

describe('Form View', function() {

  beforeEach(() => {
    this.form = new Form();
  });

  it('Should run a few assertions', () => {
    expect(this.form).toBeDefined();
  });

});
