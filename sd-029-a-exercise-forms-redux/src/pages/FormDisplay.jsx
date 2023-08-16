import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDisplay extends Component {
  render() {
    const {
      name,
      uf,
      city,
      address,
      description,
      role,
      resume,
      email,
      cpf,
    } = this.props;
    return (
      <section>
        <h1>Dados Enviados</h1>
        <div>
          {'Nome: '}
          { name }
        </div>
        <div>
          {'Email: '}
          { email }
        </div>
        <div>
          {'CPF: '}
          { cpf }
        </div>
        <div>
          {'Endereço: '}
          { address }
        </div>
        <div>
          {'Cidade: '}
          { city }
        </div>
        <div>
          {'Estado: '}
          { uf }
        </div>
        <div>
          {'Currículo: '}
          { resume }
        </div>
        <div>
          {'Cargo: '}
          { role }
        </div>
        <div>
          {'Descrição do cargo: '}
          { description }
        </div>
      </section>
    );
  }
}

FormDisplay.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  role: PropTypes.string,
  resume: PropTypes.string,
  uf: PropTypes.string,
  city: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  ...state.personalData,
  ...state.professionalData,
});

export default connect(mapStateToProps)(FormDisplay);
