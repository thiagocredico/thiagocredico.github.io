import userEvent from '@testing-library/user-event';
import { waitFor, within } from '@testing-library/react';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testa a página Wallet', () => {
  test('Existem todos os botões e campos de input an tela', async () => {
    const { getByRole, getByText, getByTestId,
      findByRole, getAllByRole } = renderWithRouterAndRedux(<Wallet />);
    const inputValue = getByRole('spinbutton', { name: /valor:/i });
    const currency = getByText(/moeda:/i);
    within(currency).getByRole('combobox');
    const method = getByRole('combobox', { name: /método de pagamento:/i });
    const tag = getByRole('combobox', { name: /categoria:/i });
    const inputDescription = getByRole('textbox', { name: /descrição:/i });
    const addExpense = getByRole('button', { name: /adicionar despesa/i });

    expect(inputValue).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
    expect(method).toBeInTheDocument();
    expect(tag).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(addExpense).toBeInTheDocument();

    userEvent.type(inputValue, '567');
    userEvent.type(inputDescription, 'teste567');
    userEvent.click(addExpense);
    // userEvent.type(inputValue, '369');
    // userEvent.type(inputDescription, 'teste369');
    // userEvent.click(addExpense);

    const teste567 = await findByRole('cell', { name: /teste567/i });
    // const teste369 = await findByRole('cell', { name: /teste369/i });
    const editRow567 = await findByRole('row', {
      name: /teste567 alimentação dinheiro 567\.00 dólar americano\/real brasileiro 4\.94 2802\.00 real editar excluir/i,
    });
    within(editRow567).getByRole('button', { name: /editar/i });

    const delRow567 = await findByRole('row', {
      name: /teste567 alimentação dinheiro 567\.00 dólar americano\/real brasileiro 4\.94 2802\.00 real editar excluir/i,
    });
    within(delRow567).getByRole('button', { name: /excluir/i });

    expect(teste567).toBeInTheDocument();
    // expect(teste369).toBeInTheDocument();
    expect(editRow567).toBeInTheDocument();
    expect(delRow567).toBeInTheDocument();
    userEvent.click(editRow567);
    userEvent.clear(inputValue);
    userEvent.clear(inputValue);

    userEvent.type(inputValue, '999');
    userEvent.type(inputDescription, 'teste999');

    // const editarDespesa = await getByText(/editar despesa/i);
    // expect(editarDespesa).toBeInTheDocument();

    userEvent.click(addExpense);
    const teste999 = await findByRole('cell', { name: /teste999/i });
    expect(teste999).toBeInTheDocument();

    const delRow999 = getByRole('row', {
      name: /teste999 alimentação dinheiro 999\.00 dólar americano\/real brasileiro 4\.94 4936\.86 real editar excluir/i,
    });
    within(delRow999).getByRole('button', { name: /excluir/i });

    userEvent.click(delRow999);

    // const delRow369 = getByRole('row', {
    //   name: /teste369 alimentação dinheiro 369\.00 dólar americano\/real brasileiro 4\.94 1823\.52 real editar excluir/i,
    // });
    // within(delRow369).getByRole('button', { name: /excluir/i });
    const button = getAllByRole('button')[4];
    userEvent.click(button);
    expect(teste999).not.toBeInTheDocument();

    userEvent.type(inputValue, '567');
    userEvent.type(inputDescription, 'teste567');
    userEvent.click(addExpense);

    const editButton = await waitFor(() => getByTestId('edit-btn'));
    expect(editButton).toBeInTheDocument();
    userEvent.click(editButton);

    userEvent.clear(inputValue);
    userEvent.clear(inputValue);
    userEvent.type(inputValue, '369');
    userEvent.type(inputDescription, 'teste369');

    const editarDespesa = await waitFor(() => getByRole('button', {
      name: /editar despesa/i,
    }));
    userEvent.click(editarDespesa);

    const teste369 = await waitFor(() => findByRole('cell', { name: /teste369/i }));

    expect(teste369).toBeInTheDocument();

    const excluir = await waitFor(() => getByTestId('delete-btn'));
    expect(excluir).toBeInTheDocument();
    userEvent.click(excluir);
    expect(teste369).not.toBeInTheDocument();
  });
});
