import React, { useContext, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FetchContext } from '../providers/FetchProvider';
import ButtonDrinks from '../components/ButtonDrinks';
import ButtonMeals from '../components/ButtonMeals';

const MAX_LENGTH = 12;

function renderDrinkRecipes(responseAPI, haveCategory, categoryReturnFromAPI) {
  if (haveCategory && Array.isArray(categoryReturnFromAPI)) {
    return categoryReturnFromAPI
      .filter((_response, index) => index < MAX_LENGTH)
      .map((el, index) => (
        <Link to={ `/drinks/${el.idDrink}` } key={ el.idDrink }>
          <article data-testid={ `${index}-recipe-card` }>
            <img
              src={ el.strDrinkThumb }
              alt="drink-thumb"
              data-testid={ `${index}-card-img` }
            />
            <span data-testid={ `${index}-card-name` }>{el.strDrink}</span>
          </article>
        </Link>
      ));
  } if (!haveCategory && Array.isArray(responseAPI)) {
    return responseAPI
      .filter((_response, index) => index < MAX_LENGTH)
      .map((el, index) => (
        <Link to={ `/drinks/${el.idDrink}` } key={ el.idDrink }>
          <article data-testid={ `${index}-recipe-card` } key={ el.idDrink }>
            <img
              src={ el.strDrinkThumb }
              alt="drink-thumb"
              data-testid={ `${index}-card-img` }
            />
            <span data-testid={ `${index}-card-name` }>{el.strDrink}</span>
          </article>
        </Link>
      ));
  }
  return null;
}

function renderMealRecipes(responseAPI, haveCategory, categoryReturnFromAPI) {
  if (haveCategory && Array.isArray(categoryReturnFromAPI)) {
    return categoryReturnFromAPI
      .filter((_response, index) => index < MAX_LENGTH)
      .map((el, index) => (
        <Link to={ `/meals/${el.idMeal}` } key={ el.idMeal }>
          <article data-testid={ `${index}-recipe-card` }>
            <img
              src={ el.strMealThumb }
              alt="meal-thumb"
              data-testid={ `${index}-card-img` }
            />
            <span data-testid={ `${index}-card-name` }>{el.strMeal}</span>
          </article>
        </Link>
      ));
  } if (!haveCategory && Array.isArray(responseAPI)) {
    return responseAPI
      .filter((_response, index) => index < MAX_LENGTH)
      .map((el, index) => (
        <Link to={ `/meals/${el.idMeal}` } key={ el.idMeal }>
          <article data-testid={ `${index}-recipe-card` } key={ el.idMeal }>
            <img
              src={ el.strMealThumb }
              alt="meal-thumb"
              data-testid={ `${index}-card-img` }
            />
            <span data-testid={ `${index}-card-name` }>{el.strMeal}</span>
          </article>
        </Link>
      ));
  }
  return null;
}

export default function Recipes() {
  const {
    setCategoryMeals,
    setCategoryDrinks,
    responseAPI,
    setResponseAPI,
    haveCategory,
    categoryReturnFromAPI,
  } = useContext(FetchContext);

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    async function fetchData() {
      if (pathname === '/meals') {
        const getAPI = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const getCategory = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
        const response = await getAPI.json();
        const responseCategory = await getCategory.json();
        setResponseAPI(response[pathname.substring(1)]);
        setCategoryMeals(responseCategory[pathname.substring(1)]);
      }
      if (pathname === '/drinks') {
        const getAPI = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        const getCategory = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        const response = await getAPI.json();
        const responseCategory = await getCategory.json();
        setResponseAPI(response[pathname.substring(1)]);
        setCategoryDrinks(responseCategory[pathname.substring(1)]);
      }
    }
    fetchData();
  }, [
    pathname,
    setResponseAPI,
    setCategoryDrinks,
    setCategoryMeals,
  ]);

  return (
    <>
      <Header
        title={ pathname === '/meals' ? 'Meals' : 'Drinks' }
        profile
        search
      />

      {pathname === '/drinks' && <ButtonDrinks />}
      {pathname === '/meals' && <ButtonMeals />}

      {pathname === '/drinks'
      && renderDrinkRecipes(responseAPI, haveCategory, categoryReturnFromAPI)}

      {pathname === '/meals'
      && renderMealRecipes(responseAPI, haveCategory, categoryReturnFromAPI)}

      <Footer />
    </>
  );
}
