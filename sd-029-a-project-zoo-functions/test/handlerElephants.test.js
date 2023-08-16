const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Testa se a função retorna o número 4 se o paramêtro count for passado como argumento', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se a função retorna um array de nomes que possui o nome Jefferson se o paramêtro names for passado como argumento', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Testa se a função retorna 10.5 se o paramêtro averageAge for passado como argumento', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Testa se a função retorna undefined se nenhum paramêtro for passado como argumento', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se a função retorna elephants se o paramêtro name for passado como argumento', () => {
    expect(handlerElephants('name')).toEqual('elephants');
  });
  it('Testa se a função retorna null se o argumento forçar o coputeData a cair em default', () => {
    expect(handlerElephants('')).toBe(null);
  });
  it('Testa se a função retorna parâmetro inválido se não for passada uma string', () => {
    expect(handlerElephants(0)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
