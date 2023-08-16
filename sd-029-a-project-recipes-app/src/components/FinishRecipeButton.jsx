import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { FetchContext } from '../providers/FetchProvider';

export default function FinishRecipeButton() {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;
  const [clicked, setClicked] = useState(false);
  const { ingredientStatus, recipe } = useContext(FetchContext);

  useEffect(() => {
    if (ingredientStatus && ingredientStatus.length > 0) {
      // console.log(ingredientStatus);
      const filterIngStatus = ingredientStatus
        .filter((ingredient) => ingredient.id === id)[0].status;
      const clickedStatus = filterIngStatus.every((ingredient) => ingredient.clicked);
      setClicked(clickedStatus);
      // console.log(clickedStatus);
    }
  }, [id, ingredientStatus]);

  let doneRecipesStoraged = JSON.parse(localStorage.getItem('doneRecipes'));
  if (doneRecipesStoraged === null) {
    doneRecipesStoraged = [];
  }
  const recipeIsDone = doneRecipesStoraged.some((doneRecipe) => doneRecipe.id === id);

  const handleClick = useCallback(() => {
    history.push('/done-recipes');
    // const now = Date.now();
    const doneRecipeToBeStoraged = [
      ...doneRecipesStoraged, {
        id,
        type: recipe[0].idMeal ? 'meal' : 'drink',
        nationality: recipe[0].strArea || '',
        category: recipe[0].strCategory,
        alcoholicOrNot: recipe[0].strAlcoholic || '',
        name: recipe[0].strMeal || recipe[0].strDrink,
        image: recipe[0].strMealThumb || recipe[0].strDrinkThumb,
        doneDate: new Date(Date.now()).toISOString(),
        tags: recipe[0].idMeal ? recipe[0].strTags.split(',') : [],
      }];
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipeToBeStoraged));
    // console.log(recipe);
  }, [history, doneRecipesStoraged, id, recipe]);

  return (
    !recipeIsDone && pathname.includes('progress') && (
      <button
        type="button"
        data-testid="finish-recipe-btn"
        style={ { position: 'fixed', bottom: 0, zIndex: 1 } }
        disabled={ !clicked }
        onClick={ handleClick }
      >
        Finish Recipe
      </button>
    )
  );
}
