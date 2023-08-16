const decrementQuantity = require('../src/decrementQuantity');

describe('a função decrementQuantity', () => {
  const inventory = [{ name: 'banana', quantity: 20 }];
  const decrementedInventory = { name: 'banana', quantity: 15 };
  it('desconta da quantidade disponível do item', () => {
    expect(decrementQuantity(inventory, 'banana', 5)).toEqual(decrementedInventory);
  });
  it('decrementa a quantidade disponível do item', () => {
    expect(decrementQuantity(inventory, 'banana', 5)).toHaveProperty('quantity', 10);
  });
  it('lança um erro ao tentar remover mais do que tem', () => {
    expect(() => decrementQuantity(inventory, 'banana', 30)).toThrow(Error);
  });
  it('seleciona decremento igual a 1 se não definido', () => {
    let x;
    expect(decrementQuantity(inventory, 'banana', x)).toHaveProperty('quantity', 9);
  });
});
