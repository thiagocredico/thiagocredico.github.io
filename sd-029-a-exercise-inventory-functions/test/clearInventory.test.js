const clearInventory = require('../src/clearInventory');

describe('A função clearInventory', () => {
  it('remove itens com quantidade 0', () => {
    expect(clearInventory([1, 2, 3, 0]).length).toEqual(3);
  });
  it('remove itens com quantidade 0', () => {
    expect(clearInventory([1, 2, 3, 0])).not.toContain(0);
  });
});