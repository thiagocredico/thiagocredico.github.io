import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { FetchContext } from '../providers/FetchProvider';

const MAX_LENGTH = 5;

export default function ButtonDrinks() {
  const location = useLocation();
  const { pathname } = location;
  const {
    setCategoryDrinksAPI,
    categoryDrinks,
    categoryDrinksAPI,
    setCategoryMealsAPI,
    setCategoryReturnFromAPI,
    setHaveCategory,
  } = useContext(FetchContext);

  useEffect(() => {
    async function fetchCategoryData() {
      if (categoryDrinksAPI) {
        const getAPI = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryDrinksAPI}`);
        const response = await getAPI.json();
        setCategoryReturnFromAPI(response[pathname.substring(1)]);
      }
    }
    fetchCategoryData();
  }, [categoryDrinksAPI, pathname, setCategoryReturnFromAPI]);

  function setTargetCategory({ target }) {
    const { value } = target;
    if (categoryDrinksAPI === value) {
      setCategoryDrinksAPI('');
      setCategoryMealsAPI('');
      setHaveCategory(false);
    } else {
      setCategoryDrinksAPI(value);
      setCategoryMealsAPI('');
      setHaveCategory(true);
    }
  }

  return (
    <div>
      {
        categoryDrinks.filter((_element, index) => index < MAX_LENGTH).map((category) => (
          <button
            data-testid={ `${category.strCategory}-category-filter` }
            key={ category.strCategory }
            value={ category.strCategory }
            onClick={ (event) => setTargetCategory(event) }
          >
            {category.strCategory}
          </button>
        ))
      }
      <button
        data-testid="All-category-filter"
        onClick={ () => {
          setHaveCategory(false);
          setCategoryDrinksAPI('');
        } }
      >
        All
      </button>
    </div>
  );
}
