import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses.reduce((acc, index) => {
      const subTotal = index.exchangeRates[index.currency].ask * index.value;
      return ((acc) + subTotal);
    }, 0.00).toFixed(2);
    return (
      <div>
        <p data-testid="email-field">
          {`Email: ${email}`}
        </p>
        <p>
          {'Despesa Total: R$ '}
        </p>
        <p data-testid="total-field">
          {total}
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
