import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delExpense, editExpense } from '../redux/actions';

class Table extends Component {
  delClick = (expense) => {
    const { dispatch } = this.props;
    dispatch(delExpense(expense));
  };

  editClick = (id, expense) => {
    const { dispatch } = this.props;
    dispatch(editExpense(expense));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        Table
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        {
          expenses.map((expense) => {
            const exchangeRate = (Number(expense.exchangeRates[expense.currency].ask));
            return (
              <tbody key={ expense.id }>
                <tr className="row">
                  <td className="cell">{ expense.description }</td>
                  <td className="cell">{ expense.tag }</td>
                  <td className="cell">{ expense.method }</td>
                  <td className="cell">{ Number(expense.value).toFixed(2) }</td>
                  <td className="cell">
                    { expense.exchangeRates[expense.currency].name }
                  </td>
                  <td className="cell">{ exchangeRate.toFixed(2) }</td>
                  <td className="cell">
                    { (Number(expense.value) * exchangeRate).toFixed(2) }
                  </td>
                  <td className="cell">Real</td>
                  <td className="cell">
                    <button
                      id={ `edit-${Number(expense.value).toFixed(2)} ` }
                      data-testid="edit-btn"
                      onClick={ () => this.editClick(expense.id, expense) }
                    >
                      Editar
                    </button>
                    <button
                      id={ `delete-${Number(expense.value).toFixed(2)} ` }
                      data-testid="delete-btn"
                      onClick={ () => this.delClick(expense) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })
        }
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Table);
