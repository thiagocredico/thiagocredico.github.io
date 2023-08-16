import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, fetchCurrenciesThunk,
  saveEditExpense, setEditar } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    tag: 'Alimentação',
    method: 'Dinheiro',
    currency: 'USD',
    editar: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrenciesThunk());
  }

  componentDidUpdate() {
    const { editar, expense, dispatch } = this.props;
    if (editar) {
      const { value, description, currency, method, tag } = expense;
      this.setState({ value, description, currency, method, tag });
      dispatch(setEditar());
    }
  }

  resetState = () => {
    this.setState({
      value: '',
      description: '',
      method: 'Dinheiro',
      currency: 'USD',
      tag: 'Alimentação',
    });
  };

  onChange = (event) => {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  };

  addClick = async (event) => {
    event.preventDefault();
    const { expenses, dispatch } = this.props;
    const { value, description, tag,
      method, currency } = this.state;
    const exchangeRates = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
    const newExpense = {
      id: expenses.length,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates,
    };
    dispatch(addExpense(newExpense));
    this.resetState();
  };

  editClick = (event) => {
    event.preventDefault();
    const { value, description, currency, method, tag, editar } = this.state;
    const { dispatch, expense } = this.props;
    console.log(expense.id);
    const { id } = expense;
    dispatch(saveEditExpense({ value, description, currency, method, tag, editar, id }));
    console.log(event);
    this.resetState();
  };

  render() {
    const { currencies, edit } = this.props;
    const { value, description, tag,
      method, currency } = this.state;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            name="value"
            type="number"
            value={ value }
            data-testid="value-input"
            onChange={ this.onChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            name="currency"
            value={ currency }
            data-testid="currency-input"
            onChange={ this.onChange }
          >
            {currencies.map((currencyMap) => (
              <option
                key={ currencyMap }
                value={ currencyMap }
              >
                { currencyMap }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento:
          <select
            id="method"
            name="method"
            value={ method }
            data-testid="method-input"
            onChange={ this.onChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label>
          Categoria:
          <select
            id="tag"
            name="tag"
            value={ tag }
            data-testid="tag-input"
            onChange={ this.onChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label>
          Descrição:
          <input
            id="description"
            name="description"
            type="text"
            value={ description }
            onChange={ this.onChange }
            data-testid="description-input"
          />
        </label>
        <button
          type="submit"
          onClick={ edit ? this.editClick : this.addClick }
        >
          { edit ? 'Editar despesa' : 'Adicionar despesa' }
        </button>

      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.string),
  expenses: PropTypes.arrayOf(PropTypes.string),
  expense: PropTypes.arrayOf(PropTypes.string),
  edit: PropTypes.bool,
  editar: PropTypes.bool,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
  edit: wallet.edit,
  editar: wallet.editar,
  expense: wallet.expense,
});

export default connect(mapStateToProps)(WalletForm);
