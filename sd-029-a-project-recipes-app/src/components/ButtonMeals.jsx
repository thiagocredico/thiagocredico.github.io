import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FetchContext } from '../providers/FetchProvider';

const MAX_LENGTH = 5;

export default function ButtonMeals() {
  const location = useLocation();
  const { pathname } = location;
  const {
    setCategoryDrinksAPI,
    categoryMeals,
    setCategoryMealsAPI,
    categoryMealsAPI,
    setCategoryReturnFromAPI,
    setHaveCategory,
  } = useContext(FetchContext);

  useEffect(() => {
    async function fetchCategoryData() {
      if (categoryMealsAPI) {
        const getAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryMealsAPI}`);
        const response = await getAPI.json();
        setCategoryReturnFromAPI(response[pathname.substring(1)]);
      }
    }
    fetchCategoryData();
  }, [categoryMealsAPI, pathname, setCategoryReturnFromAPI]);

  function setTargetCategory({ target }) {
    const { value } = target;
    if (categoryMealsAPI === value) {
      setCategoryMealsAPI('');
      setCategoryDrinksAPI('');
      setHaveCategory(false);
    } else {
      setCategoryMealsAPI(value);
      setCategoryDrinksAPI('');
      setHaveCategory(true);
    }
  }

  return (
    <div>
      {
        categoryMeals.filter((_element, index) => index < MAX_LENGTH).map((category) => (
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
          setCategoryMealsAPI('');
        } }
      >
        All
      </button>
    </div>
  );
}
