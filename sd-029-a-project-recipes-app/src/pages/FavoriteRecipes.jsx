import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

const TWO_SECONDS = 1000;

export default function FavoriteRecipes() {
  const [stateFavoriteRecipes, setStateFavoriteRecipes] = useState([]);
  const [linkCopied, setLinkCopied] = useState(false);
  const [drink, setDrink] = useState('drink');
  const [meal, setMeal] = useState('meal');

  const shareLink = (category, elementId) => {
    const link = `http://localhost:3000/${category}/${elementId}`;
    // console.log('Esse é o link', link);
    copy(link);
    setTimeout(() => setLinkCopied(false), TWO_SECONDS);
    setLinkCopied(true);
  };

  useEffect(() => {
    const sttFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setStateFavoriteRecipes(sttFavoriteRecipes);
  }, []);

  const dellFavorite = (elementId) => {
    const getRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const recipeToBeStoraged = getRecipes
      .filter(({ id }) => elementId !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipeToBeStoraged));
    setStateFavoriteRecipes(recipeToBeStoraged);
  };

  return (
    <div className="favorite_recipes_main">
      <Header title="Favorite Recipes" profile search={ false } />
      <div className="buttons_favorite_filter">
        <button
          onClick={ () => {
            setMeal('meal');
            setDrink('drink');
          } }
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          onClick={ () => {
            setMeal('meal');
            setDrink('');
          } }
          data-testid="filter-by-meal-btn"
        >
          Meals
        </button>
        <button
          onClick={ () => {
            setMeal('');
            setDrink('drink');
          } }
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
        {stateFavoriteRecipes
          .filter((favorite) => favorite.type === meal || favorite.type === drink)
          .map((element, index) => (
            <div key={ element.id } className="cards_favorite_recipes">
              {element.type === 'meal' ? (
                <>
                  <Link to={ `/${element.type}s/${element.id}` }>
                    <img
                      src={ element.image }
                      alt={ element.name }
                      data-testid={ `${index}-horizontal-image` }
                      className="favorite_card_img"
                    />
                    <span data-testid={ `${index}-horizontal-name` }>
                      {element.name}
                    </span>
                  </Link>
                  <span data-testid={ `${index}-horizontal-top-text` }>
                    {`${element.nationality} - ${element.category}`}
                  </span>
                  <button onClick={ () => shareLink('meals', element.id) }>
                    <img
                      src={ shareIcon }
                      alt="share-icon"
                      data-testid={ `${index}-horizontal-share-btn` }
                    />
                  </button>
                  { linkCopied }
                  <button
                    src={ blackHeartIcon }
                    data-testid={ `${index}-horizontal-favorite-btn` }
                    onClick={ () => dellFavorite(element.id) }
                  >
                    <img src={ blackHeartIcon } alt="favorite-icon" />
                  </button>
                  {linkCopied && <span>Link copied!</span>}
                </>
              ) : (
                <>
                  <Link to={ `/${element.type}s/${element.id}` }>
                    <img
                      src={ element.image }
                      alt={ element.name }
                      data-testid={ `${index}-horizontal-image` }
                      className="favorite_card_img"
                    />
                    <span data-testid={ `${index}-horizontal-name` }>
                      {element.name}
                    </span>
                  </Link>
                  <span data-testid={ `${index}-horizontal-top-text` }>
                    {/* {element.alcoholicOrNot ? element.alcoholicOrNot : 'No'} */}
                    {element.alcoholicOrNot}
                  </span>
                  <button onClick={ () => shareLink('drinks', element.id) }>
                    <img
                      src={ shareIcon }
                      data-testid={ `${index}-horizontal-share-btn` }
                      alt="share-icon"
                    />
                  </button>
                  <button
                    src={ blackHeartIcon }
                    data-testid={ `${index}-horizontal-favorite-btn` }
                    onClick={ () => dellFavorite(element.id) }
                  >
                    <img src={ blackHeartIcon } alt="favorite-icon" />
                  </button>
                  {linkCopied && <span>Link copied!</span>}
                </>

              )}
            </div>
          ))}
      </div>
    </div>
  );
}
