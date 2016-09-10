requirejs.config({
  callback: window.__karma__.start
});

describe('A suite', function() {
  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});
