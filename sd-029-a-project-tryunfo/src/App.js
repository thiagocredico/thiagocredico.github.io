import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

const attMax = 90;
const ttlMax = 210;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      cardDelete: true,
      filter: '',
      rareFilter: '',
      trunfoFilter: false,
      disabledFilter: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validation = this.validation.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  filterByName = ({ target }) => {
    const { value } = target;
    this.setState({ filter: value });
  };

  filterByRare = ({ target }) => {
    const { value } = target;
    if (value === 'todas') {
      this.setState({ rareFilter: '' });
    } else {
      this.setState({ rareFilter: value });
    }
  };

  filterByTrunfo = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (value) {
      this.setState({ trunfoFilter: true, disabledFilter: true });
    } else {
      this.setState({ trunfoFilter: false, disabledFilter: false });
    }
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    const newValue = target.type === 'checkbox' ? target.checked : value;
    this.setState({
      [name]: newValue,
    }, this.validation);
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((previousState) => ({
      savedCards: [...previousState.savedCards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  };

  removeCard = (indexToBeRemoved, trunfo) => {
    const { savedCards } = this.state;
    const newSavedCards = savedCards.filter((card, index) => index !== indexToBeRemoved);
    this.setState({
      savedCards: newSavedCards,
    });
    if (!trunfo) {
      this.setState({ hasTrunfo: false });
    }
  };

  validation() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;
    const notEmpty = cardName && cardDescription
    && cardImage && cardRare && cardAttr1 && cardAttr2 && cardAttr3;
    const bellow210 = (Number(cardAttr1)
    + Number(cardAttr2) + Number(cardAttr3)) <= ttlMax;
    const bellow90 = Number(cardAttr1) <= attMax && Number(cardAttr2) <= attMax
    && Number(cardAttr3) <= attMax;
    const above0 = cardAttr1 >= 0 && cardAttr2 >= 0 && cardAttr3 >= 0;

    if (notEmpty && bellow210 && bellow90 && above0) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      hasTrunfo, cardDelete, filter,
      isSaveButtonDisabled, savedCards,
      rareFilter, trunfoFilter, disabledFilter,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          savedCards={ savedCards }
        />
        <label htmlFor="filter">
          Filtro por nome
          <input
            type="text"
            name="filter"
            onChange={ this.filterByName }
            data-testid="name-filter"
            disabled={ disabledFilter }
          />
        </label>

        <label htmlFor="rareFilter">
          Filtro por raridade
          <select
            name="rareFilter"
            data-testid="rare-filter"
            onChange={ this.filterByRare }
            disabled={ disabledFilter }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfoFilter">
          Super Trunfo
          <input
            name="trunfoFilter"
            id="trunfoFilter"
            type="checkbox"
            onChange={ this.filterByTrunfo }
            checked={ this.trunfoFilter }
            data-testid="trunfo-filter"
          />
        </label>
        {
          savedCards
            .filter((card) => (trunfoFilter ? card.cardTrunfo === trunfoFilter : card))
            .filter((card) => {
              if (rareFilter === '') {
                return card.cardRare.includes(rareFilter);
              }
              return card.cardRare === rareFilter;
            })
            .filter((card) => card.cardName.includes(filter))
            .map((card, index) => (
              <Card
                key={ index }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                cardDelete={ cardDelete }
                removeCard={ () => this.removeCard(index) }
              />
            ))
        }

      </div>
    );
  }
}

export default App;
