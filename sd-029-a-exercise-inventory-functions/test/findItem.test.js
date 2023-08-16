const findItem = require('../src/findItem');

describe('a função findItem', () => {
  const inventory = [{ name: 'banana', quantity: 20 }];
  const decrementedInventory = { name: 'banana', quantity: 15 };
  it('retorna o item do inventário dado o nome', () => {
    expect(findItem(inventory, 'banana')).toEqual({ name: 'banana', quantity: 20 });
  });
  it('lança um erro para itens inexistentes', () => {
    expect(() => findItem(inventory, 'maçã')).toThrow(Error);
  });
});