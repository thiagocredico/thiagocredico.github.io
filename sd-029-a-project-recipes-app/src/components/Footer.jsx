import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import '../styles/footer.css';
import { FetchContext } from '../providers/FetchProvider';

export default function Footer() {
  const history = useHistory();
  const {
    setCategoryDrinksAPI,
    setCategoryMealsAPI,
    setHaveCategory,
  } = useContext(FetchContext);

  function redirectMeals() {
    history.push('/meals');
    setCategoryDrinksAPI('');
    setHaveCategory(false);
  }

  function redirectDrinks() {
    history.push('/drinks');
    setCategoryMealsAPI('');
    setHaveCategory(false);
  }

  return (
    <footer data-testid="footer" className="footer">
      <button
        aria-label="Meals"
        onClick={ () => redirectMeals() }
      >
        <img src={ mealIcon } alt="meal-icon" data-testid="meals-bottom-btn" />
      </button>
      <button
        aria-label="Drinks"
        onClick={ () => redirectDrinks() }
      >
        <img src={ drinkIcon } alt="drink-icon" data-testid="drinks-bottom-btn" />
      </button>
    </footer>
  );
}
