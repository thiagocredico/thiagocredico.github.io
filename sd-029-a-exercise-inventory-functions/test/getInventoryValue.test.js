const getInventoryValue = require('../src/getInventoryValue');

describe('a função getInventoryValue', () => {
  const inventory = [
    { name: 'maça', unit: 'kg', price: 5.69, quantity: 38 },
    { name: 'ovos', unit: 'dúzia', price: 5.07, quantity: 19 },
    { name: 'leite', unit: 'pacote', price: 5.19, quantity: 41 },
    { name: 'banana', unit: 'kg', price: 1.99, quantity: 0 },
  ];
  it('retorna zero para um inventário vazio', () => {
    expect(getInventoryValue([])).toEqual(0);
  });
  it('retorna o valor do inventário', () => {
    expect(getInventoryValue(inventory)).toBeCloseTo(525.34);
  });
  it('verifica se a função foi declarada', () => {
    expect(getInventoryValue).toBeDefined();
  });
});
