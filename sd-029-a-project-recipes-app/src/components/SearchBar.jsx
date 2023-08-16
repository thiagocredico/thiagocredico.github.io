import React, { useState, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FetchContext } from '../providers/FetchProvider';

const URL_MEALS = 'https://www.themealdb.com/api/json/v1/1/';
const URL_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default function SearchBar() {
  const { setResponseAPI } = useContext(FetchContext);

  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const history = useHistory();
  const { pathname } = history.location;

  const fetchData = useCallback(async () => {
    // console.log(selectedOption);
    let response = [];
    const endpoint = pathname === '/meals' ? URL_MEALS : URL_DRINKS;

    switch (selectedOption) {
    case 'Ingredient': {
      const getAPI = await fetch(`${endpoint}filter.php?i=${searchValue}`);
      response = await getAPI.json();
      break;
    }
    case 'First letter': {
      if (searchValue.length === 1) {
        const getAPI = await fetch(`${endpoint}search.php?f=${searchValue}`);
        response = await getAPI.json();
      } else {
        return global.alert('Your search must have only 1 (one) character');
      }
      break;
    }
    default: {
      const getAPI = await fetch(`${endpoint}search.php?s=${searchValue}`);
      response = await getAPI.json();
      // console.log('Response', response);
      break;
    }
    }

    const idProp = pathname === '/meals' ? 'idMeal' : 'idDrink';

    if (response[pathname.substring(1)] === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
      return;
    }

    if (
      response
      && response[pathname.substring(1)]
      && response[pathname.substring(1)] !== null
      && response[pathname.substring(1)].length === 1
    ) {
      history.push(`${pathname}/${response[pathname.substring(1)][0][idProp]}`);
    } else {
      setResponseAPI(response[pathname.substring(1)]);
    }
  }, [searchValue, selectedOption, history, setResponseAPI, pathname]);

  const handleOptionChange = ({ target }) => {
    const { value } = target;
    setSelectedOption(value);
  };

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        value={ searchValue }
        onChange={ handleChange }
      />
      <label>
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="option"
          value="Ingredient"
          checked={ selectedOption === 'Ingredient' }
          onChange={ handleOptionChange }
        />
        Ingredient
      </label>
      <label>
        <input
          type="radio"
          data-testid="name-search-radio"
          name="option"
          value="Name"
          checked={ selectedOption === 'Name' }
          onChange={ handleOptionChange }
        />
        Name
      </label>
      <label>
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="option"
          value="First letter"
          checked={ selectedOption === 'First letter' }
          onChange={ handleOptionChange }
        />
        First letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ fetchData }
      >
        Buscar
      </button>
    </div>
  );
}
