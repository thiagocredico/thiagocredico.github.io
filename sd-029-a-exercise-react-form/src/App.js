import React from 'react';
import InfoProfile from './component/InfoProfile';
import InfoAddress from './component/InfoAddress';
import handleValue from './utils/handleValue';
import InfoJobs from './component/InfoJobs';
import RenderDiv from './component/RenderDiv';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: 'Acre',
  addressType: 'Casa',
  resume: '',
  role: '',
  roleDescription: '',
  emailError: '',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: 'Acre',
      addressType: 'Casa',
      displayData: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = INITIAL_STATE;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ displayData: true });
  }

  handleChange({ target }) {
    const { name, value } = target;

    const newValue = handleValue(name, value);

    const errorMsg = this.validateEmail(name, value);

    this.setState((previousState) => ({
      ...previousState,
      [name]: newValue,
      [`${name}Error`]: errorMsg,
    }));
  }

  handleBlur({ target }) {
    const { name, value } = target;

    if (name === 'city' && /^\d/.test(value)) {
      this.setState({
        [name]: '',
      });
    }
  }

  handleClear = () => {
    this.setState(INITIAL_STATE);
  };

  validateEmail(name, value) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return regex.test(value) || name !== 'email' ? undefined : 'Email inválido';
  }

  render() {
    const { displayData } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <InfoProfile onChange={ this.handleChange } formState={ this.state } />
        <InfoAddress
          onChange={ this.handleChange }
          onBlur={ this.handleBlur }
          formState={ this.state }
        />
        <InfoJobs onChange={ this.handleChange } formState={ this.state } />
        <button type="submit">Enviar</button>
        <button type="reset" onClick={ this.handleClear }>Limpar</button>
        { displayData && <RenderDiv formState={ this.state } /> }
      </form>
    );
  }
}

export default App;
