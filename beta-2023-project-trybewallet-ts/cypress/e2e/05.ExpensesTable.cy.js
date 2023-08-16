/// <reference types="cypress" />

import { tableHeaderList } from '../utils/constants';
import mockFetch from '../mocks/fetch';
import { initialExpenses } from '../utils/constants';
import { addExpense, logInWithValidCredentials } from '../utils/helperFunctions';

describe('5 - Desenvolva uma tabela com os gastos contendo as seguintes características:', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        cy.stub(win, 'fetch').callsFake(mockFetch);
      },
    });

    logInWithValidCredentials();
  });

  it('A tabela deve possuir um cabeçalho com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido e Moeda de conversão', () => {
    cy.get('th').should('have.length', tableHeaderList.length);

    cy.wrap(tableHeaderList).each((header) => {
      cy.get('th').contains(header);
    });
  });

  it('A tabela deve ser alimentada pelo estado da aplicação, que estará disponível na chave expenses que vem do reducer wallet.', () => {
    addExpense(initialExpenses);

    const expectedTableRows = [
      ['Dez dólares', 'Trabalho', 'Cartão de débito', '10.00', 'Dólar Americano/Real Brasileiro', '4.75', '47.53', 'Real'],
      ['Cinco euros', 'Lazer', 'Cartão de crédito', '5.00', 'Euro/Real Brasileiro', '5.13', '25.63', 'Real'],
    ];
    cy.get('tbody tr').should('have.length', expectedTableRows.length);

    cy.get('tbody tr').each((row, index) => {
      cy.wrap(expectedTableRows[index]).each((expectedValue) => {
        cy.get(row).find('td').contains(expectedValue);
      });
    });
  });
});
