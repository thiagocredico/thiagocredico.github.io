import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

import '../styles/doneRecipes.css';

const copy = require('clipboard-copy');

const TWO_SECONDS = 2000;

export default function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [link, setLink] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getRecipesFromLocalStorage = JSON
      .parse(localStorage.getItem('doneRecipes')) || [];
    setDoneRecipes(getRecipesFromLocalStorage);
  }, []);

  const shareLink = (type, id) => {
    const route = type === 'meal' ? 'meals' : 'drinks';
    copy(`http://localhost:3000/${route}/${id}`);
    setTimeout(() => setLink(false), TWO_SECONDS);
    setLink(true);
  };

  const filteredRecipes = doneRecipes
    .filter((recipe) => recipe.type === filter || filter === '');

  return (
    <main>
      <Header title="Done Recipes" profile search={ false } />
      <section className="done__btn">
        <button
          data-testid="filter-by-all-btn"
          onClick={ () => setFilter('') }
          name="filter-all"
        >
          All
        </button>
        <button
          data-testid="filter-by-meal-btn"
          onClick={ () => setFilter('meal') }
          name="filter-meals"
        >
          Meals
        </button>
        <button
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilter('drink') }
          name="filter-drinks"
        >
          Drinks
        </button>
      </section>
      {filteredRecipes.map((recipe, index) => (
        <article className="done__card" key={ recipe.id }>
          <Link to={ `/${recipe.type === 'meal' ? 'meals' : 'drinks'}/${recipe.id}` }>
            <img
              src={ recipe.image }
              alt={ recipe.name }
              data-testid={ `${index}-horizontal-image` }
              className="done__card__img"
            />
            <h4 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h4>
          </Link>
          { recipe.type === 'meal' ? (
            <span
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`${recipe.nationality} - ${recipe.category}`}
            </span>
          ) : (
            <span
              data-testid={ `${index}-horizontal-top-text` }
            >
              {recipe.alcoholicOrNot}
            </span>
          )}
          <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
          <div>
            {recipe.tags.map((tag) => (
              <span
                data-testid={ `${index}-${tag}-horizontal-tag` }
                key={ tag }
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={ () => shareLink(recipe.type, recipe.id) }
            name={ `${index}-share-btn` }
          >
            <img
              src={ shareIcon }
              alt="share-icon"
              data-testid={ `${index}-horizontal-share-btn` }
            />
          </button>
          {link && <span>Link copied!</span>}
        </article>
      ))}
    </main>
  );
}
