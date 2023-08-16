import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export default function StartRecipeButton() {
  const { id } = useParams();
  const location = useLocation();
  const { pathname } = location;
  const history = useHistory();
  const mealOrDrinks = pathname.includes('/meals') ? 'meals' : 'drinks';

  let doneRecipesStoraged = JSON.parse(localStorage.getItem('doneRecipes'));
  if (doneRecipesStoraged === null) {
    doneRecipesStoraged = [];
  }
  const recipeIsDone = doneRecipesStoraged.some((doneRecipe) => doneRecipe.id === id);

  let inProgressRecipesStoraged = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProgressRecipesStoraged === null) {
    inProgressRecipesStoraged = {
      drinks: {},
      meals: {},
    };
  }
  if (inProgressRecipesStoraged.drinks === undefined) {
    inProgressRecipesStoraged.drinks = {};
  }
  if (inProgressRecipesStoraged.meals === undefined) {
    inProgressRecipesStoraged.meals = {};
  }

  const recipeIsInProgress = Object.keys(inProgressRecipesStoraged[mealOrDrinks])
    .some((inProgressRecipeId) => inProgressRecipeId === id);

  return (
    !recipeIsDone && !pathname.includes('progress') && (
      <button
        type="button"
        data-testid="start-recipe-btn"
        style={ { position: 'fixed', bottom: 0, zIndex: 1 } }
        onClick={ () => history.push(`/${mealOrDrinks}/${id}/in-progress`) }
      >
        {recipeIsInProgress ? 'Continue Recipe' : 'Start Recipe' }
      </button>
    )
  );
}
