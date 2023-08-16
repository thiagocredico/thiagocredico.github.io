import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('o retorno de fetchProductsList("computador") === computadorSearch', async () => {
    const response = await fetchProductsList('computador');
    expect(response).toStrictEqual(computadorSearch);
  });

  it('fetchProductsList() retorna o erro "Termo de busca não informado"', async () => {
    const response = fetchProductsList();
    await expect(response).rejects.toThrow('Termo de busca não informado');
  });
});
