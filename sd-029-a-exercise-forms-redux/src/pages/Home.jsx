import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

class Home extends Component {
  bttnClick = () => {
    const { history } = this.props;
    history.push('/personal-form');
  };

  render() {
    return (
      <section>
        <Button
          label="Preencher Formulário"
          moreClasses="text-center is-info is-large is-fullwidth"
          type="button"
          onClick={ this.bttnClick }
        />
      </section>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Home;
