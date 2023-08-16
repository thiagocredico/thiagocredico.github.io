import * as api from '../services/api';
import mockedCategoriesResult from '../__mocks__/categories';
import mockFetch from '../__mocks__/mockFetch';
import { vi } from 'vitest';

global.fetch = vi.fn(mockFetch as any);

describe('1 - Implemente o módulo de acesso à api do Mercado Livre', () => {
  it('Implementa a função `getCategories`', () => {

    return api.getCategories().then((categories: any) => {
      expect(global.fetch).toHaveBeenCalled();
      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.mercadolibre.com/sites/MLB/categories',
      );
      expect(categories).toEqual(mockedCategoriesResult);
    });
  });

  it('Implementa a função `getProductsFromCategoryAndQuery`', () => {
    const categoryId = 'category1';
    const query = 'my-query';
    const successResponseBody = {};

    const mockFetchPromise: any = Promise.resolve({
      json: () => Promise.resolve(successResponseBody),
    });

    vi.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    // @ts-ignore
    return api.getProductsFromCategoryAndQuery(categoryId, query).then((products: any) => {
      expect(global.fetch).toHaveBeenCalled();
      expect(products).toEqual(successResponseBody);
    });
  });
});
