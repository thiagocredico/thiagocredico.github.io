import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const FetchContext = createContext();

function FetchProvider({ children }) {
  const [responseAPI, setResponseAPI] = useState([]);
  const [categoryMeals, setCategoryMeals] = useState([]);
  const [categoryDrinks, setCategoryDrinks] = useState([]);
  const [categoryDrinksAPI, setCategoryDrinksAPI] = useState('');
  const [categoryMealsAPI, setCategoryMealsAPI] = useState('');
  const [categoryReturnFromAPI, setCategoryReturnFromAPI] = useState('');
  const [haveCategory, setHaveCategory] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [ingredientStatus, setIngredientStatus] = useState([]);

  const values = useMemo(() => ({
    categoryMeals,
    setCategoryMeals,
    categoryDrinks,
    setCategoryDrinks,
    responseAPI,
    setResponseAPI,
    categoryDrinksAPI,
    setCategoryDrinksAPI,
    categoryMealsAPI,
    setCategoryMealsAPI,
    haveCategory,
    setHaveCategory,
    categoryReturnFromAPI,
    setCategoryReturnFromAPI,
    recipe,
    setRecipe,
    ingredientStatus,
    setIngredientStatus,
  }), [
    categoryMeals,
    responseAPI,
    setCategoryMeals,
    categoryDrinks,
    setCategoryDrinksAPI,
    setResponseAPI,
    categoryDrinksAPI,
    categoryMealsAPI,
    setCategoryMealsAPI,
    haveCategory,
    setHaveCategory,
    categoryReturnFromAPI,
    setCategoryReturnFromAPI,
    recipe,
    setRecipe,
    ingredientStatus,
    setIngredientStatus,
  ]);

  return (
    <FetchContext.Provider value={ values }>
      {children}
    </FetchContext.Provider>
  );
}

FetchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FetchProvider;
