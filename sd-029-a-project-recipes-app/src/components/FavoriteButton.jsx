import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { FetchContext } from '../providers/FetchProvider';

function FavoriteButton() {
  const { recipe } = useContext(FetchContext);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setFavoriteRecipes(getRecipes);
  }, []);

  useEffect(() => {
    setIsFavorite(favoriteRecipes.some((favRecipe) => favRecipe.id === id));
  }, [id, favoriteRecipes]);

  const addFavorite = () => {
    const getRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const recipeToBeStoraged = [
      ...getRecipes, {
        id,
        type: recipe[0].idMeal ? 'meal' : 'drink',
        nationality: recipe[0].strArea || '',
        category: recipe[0].strCategory,
        alcoholicOrNot: recipe[0].strAlcoholic || '',
        name: recipe[0].strMeal || recipe[0].strDrink,
        image: recipe[0].strMealThumb || recipe[0].strDrinkThumb,
      }];
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipeToBeStoraged));
    setIsFavorite(true);
  };

  const dellFavorite = () => {
    const getRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const recipeToBeStoraged = getRecipes.filter(({ id: idRecipe }) => id !== idRecipe);
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipeToBeStoraged));
    setIsFavorite(false);
  };

  return (
    isFavorite ? (
      <button
        data-testid="favorite-btn"
        onClick={ () => dellFavorite() }
        src={ blackHeartIcon }
      >
        <img src={ blackHeartIcon } alt="favorite-recipe" />
      </button>
    ) : (
      <button
        data-testid="favorite-btn"
        onClick={ () => addFavorite() }
        src={ whiteHeartIcon }
      >
        <img src={ whiteHeartIcon } alt="favorite-recipe" />
      </button>
    )
  );
}

FavoriteButton.propTypes = {
  recipe: propTypes.objectOf(propTypes.string),
}.isRequired;

export default FavoriteButton;
