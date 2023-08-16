import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import mockData from './mockData';

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockImplementation(() => mockData),
  });
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('Teste da página Star Wars', () => {
  test('Teste da página inicial', async () => {
    render(<App />);
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument();
    const tatooine = await waitFor(() => screen.getByText(/tatooine/i));
    expect(tatooine).toBeInTheDocument();
    const alderaan = await waitFor(() => screen.getByText(/alderaan/i));
    expect(alderaan).toBeInTheDocument();
    userEvent.type(input, 'tatoo');
    const tatooine2 = await waitFor(() => screen.getByText(/tatoo/i));
    expect(tatooine2).toBeInTheDocument();
    expect(alderaan).not.toBeInTheDocument();
    userEvent.clear(input)
    const coluna = screen.getByRole('combobox', {  name: /coluna/i})
    userEvent.selectOptions(screen.getByLabelText('Coluna'), 'population')
    const filtrar = screen.getByRole('button', {  name: /filtrar/i})
    userEvent.click(filtrar)
    const buttonX = screen.getByRole('button', {  name: /x/i})
    userEvent.click(buttonX)
    userEvent.selectOptions(screen.getByLabelText('Coluna'), 'population')
    userEvent.click(filtrar)
    userEvent.selectOptions(screen.getByLabelText('Coluna'), 'rotation_period')
    userEvent.selectOptions(screen.getByLabelText('Operador'), 'maior que')
    userEvent.click(filtrar)
    userEvent.selectOptions(screen.getByLabelText('Coluna'), 'orbital_period')
    userEvent.selectOptions(screen.getByLabelText('Operador'), 'menor que')
    userEvent.click(filtrar)
    userEvent.selectOptions(screen.getByLabelText('Coluna'), 'diameter')
    userEvent.selectOptions(screen.getByLabelText('Operador'), 'igual a')
    userEvent.click(filtrar)
    userEvent.selectOptions(screen.getByLabelText('Coluna'), 'surface_water')
    userEvent.selectOptions(screen.getByLabelText('Operador'), 'igual a')
    userEvent.click(filtrar)
    const removeAll = screen.getByRole('button', {  name: /remover todas filtragens/i})
    userEvent.click(removeAll)
    const ASC = screen.getByRole('radio', {  name: /asc/i})
    const DESC = screen.getByRole('radio', {  name: /desc/i})
    const ORDENAR = screen.getByRole('button', {  name: /ordenar/i})
    userEvent.click(ASC)
    userEvent.click(ORDENAR)
    userEvent.click(DESC)
    userEvent.click(ORDENAR)
    userEvent.selectOptions(screen.getByLabelText('Ordenar'), 'population')
    userEvent.click(ASC)
    userEvent.click(ORDENAR)
    userEvent.click(DESC)
    userEvent.click(ORDENAR)
    userEvent.selectOptions(screen.getByLabelText('Ordenar'), 'rotation_period')
    userEvent.click(ASC)
    userEvent.click(ORDENAR)
    userEvent.click(DESC)
    userEvent.click(ORDENAR)
    userEvent.selectOptions(screen.getByLabelText('Ordenar'), 'orbital_period')
    userEvent.click(ASC)
    userEvent.click(ORDENAR)
    userEvent.click(DESC)
    userEvent.click(ORDENAR)
    userEvent.selectOptions(screen.getByLabelText('Ordenar'), 'diameter')
    userEvent.click(ASC)
    userEvent.click(ORDENAR)
    userEvent.click(DESC)
    userEvent.click(ORDENAR)
    userEvent.selectOptions(screen.getByLabelText('Ordenar'), 'surface_water')
  })
});
