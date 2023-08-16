const addToInventory = require('../src/addToInventory');

describe('a função addToInventory', () => {
  it('adiciona item ao inventário', () => {
    const arrayDeEntrada = [1, 2];
    addToInventory(arrayDeEntrada, 11);
    expect(arrayDeEntrada).toEqual([1, 2, 11]);
  });
  it('lança exceção se não for passado um array', () => {
    expect(() => {
      addToInventory();
    }).toThrow(new Error('O inventário deve ser um array'));
  });
});
