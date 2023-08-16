import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import StartRecipeButton from '../components/StartRecipeButton';
import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';
import { FetchContext } from '../providers/FetchProvider';

const URL_MEALS_DETAILS = 'https://www.themealdb.com/api/json/v1/1/';
const URL_DRINKS_DETAILS = 'https://www.thecocktaildb.com/api/json/v1/1/';
const MEALS_SUBSTRING = 6;
const DRINKS_SUBSTRING = 7;
const MAX_RECOMMENDATIONS = 6;

export default function RecipesDetails() {
  const { setRecipe, recipe,
    ingredientStatus, setIngredientStatus } = useContext(FetchContext);
  const [recommedations, setRecommendations] = useState([]);
  const history = useHistory();
  const { pathname } = history.location;
  const { id } = useParams();

  const endpoint = pathname.includes('/meals') ? URL_MEALS_DETAILS : URL_DRINKS_DETAILS;
  const mealsOrDrinks = pathname.includes('/drinks') ? DRINKS_SUBSTRING : MEALS_SUBSTRING;
  const invertedEndpoint = pathname.includes('/meals')
    ? URL_DRINKS_DETAILS : URL_MEALS_DETAILS;
  const invertPathname = pathname.includes('/meals') ? 'drinks' : 'meals';
  const mealOrDrinkThumb = pathname
    .includes('/drinks') ? 'strDrinkThumb' : 'strMealThumb';
  const strMealOrDrink = pathname
    .includes('/drinks') ? 'strDrink' : 'strMeal';
  const strCategoryOrAlcoholic = pathname
    .includes('/drinks') ? 'strAlcoholic' : 'strCategory';
  const invertedMealOrDrinkThumb = pathname
    .includes('/drinks') ? 'strMealThumb' : 'strDrinkThumb';
  const invertedStrMealOrDrink = pathname
    .includes('/drinks') ? 'strMeal' : 'strDrink';

  useEffect(() => {
    async function fetchDetails() {
      const responseDetails = await fetch(`${endpoint}lookup.php?i=${id}`);
      const dataDet = await responseDetails.json();
      const responseRecommedations = await fetch(`${invertedEndpoint}search.php?s=`);
      const dataRecom = await responseRecommedations.json();
      setRecipe(dataDet[pathname.substring(1, mealsOrDrinks)]);
      setRecommendations(dataRecom[invertPathname]);
      const keys = dataDet[pathname.substring(1, mealsOrDrinks)]
        .map((el) => (Object.keys(el).filter((ele) => ele.includes('strIngredient'))));
      const keys2 = dataDet[pathname.substring(1, mealsOrDrinks)]
        .map((el) => (Object.keys(el).filter((ele) => ele.includes('strMeas'))));
      const newMeas = [];
      keys2[0].forEach((key, index) => {
        if (dataDet[pathname.substring(1, mealsOrDrinks)][0][key] !== ''
        && dataDet[pathname.substring(1, mealsOrDrinks)][0][key] !== null) {
          [newMeas[index]] = [{
            measure: dataDet[pathname.substring(1, mealsOrDrinks)][0][key],
            ingredient: dataDet[pathname.substring(1, mealsOrDrinks)][0][keys[0][index]],
            clicked: false,
          }];
        }
      });
      const getIngredientStatus = JSON
        .parse(localStorage.getItem('ingredient_status')) || [];
      // console.log(getIngredientStatus);
      // console.log(ingredientStatus);

      if (getIngredientStatus.every((ingredient) => ingredient.id !== id)) {
        const ingStatusToStorage = [
          ...getIngredientStatus, { id, status: newMeas }];
        localStorage.setItem('ingredient_status', JSON.stringify(ingStatusToStorage));
        setIngredientStatus(ingStatusToStorage);
        console.log(ingredientStatus);
      }
    }
    fetchDetails();
  }, [endpoint, id, pathname, mealsOrDrinks, ingredientStatus,
    invertedEndpoint, invertPathname, setRecipe, setIngredientStatus]);

  const handleChange = useCallback((ingredientNumber) => {
    const filterIngStatus = JSON.parse(localStorage.getItem('ingredient_status'))
      .filter((ingredient) => ingredient.id === id);
    // console.log(filterIngStatus);
    // console.log(filterIngStatus[0]
    //   .status[ingredientNumber][0].clicked);
    filterIngStatus[0].status[ingredientNumber].clicked = !filterIngStatus[0]
      .status[ingredientNumber].clicked;
    // console.log(filterIngStatus[0].status[ingredientNumber][0].clicked);

    localStorage.setItem('ingredient_status', JSON.stringify(filterIngStatus));
    setIngredientStatus(filterIngStatus);
  }, [id, setIngredientStatus]);

  return (
    <>
      <main>
        {recipe.map((el, index) => (
          <div key={ el[strMealOrDrink] }>
            <ShareButton index={ index } />
            <FavoriteButton />
            <img src={ el[mealOrDrinkThumb] } alt="meal" data-testid="recipe-photo" />
            <h3 data-testid="recipe-title">{el[strMealOrDrink]}</h3>
            <p data-testid="recipe-category">{el[strCategoryOrAlcoholic]}</p>
            <div>
              {Object.keys(el).map((key) => {
                if (key.startsWith('strIngredient') && el[key]) {
                  const ingredientNumber = key.slice('strIngredient'.length);
                  const measureKey = `strMeasure${ingredientNumber}`;
                  const formattedString = `${el[key]} - ${el[measureKey]}`;
                  return (
                    !pathname.includes('progress')
                      ? (
                        <p
                          key={ key }
                          data-testid={
                            `${ingredientNumber - 1}-ingredient-name-and-measure`
                          }
                        >
                          {formattedString}
                        </p>
                      )
                      : (
                        <div
                          key={ key }
                          data-testid={
                            `${ingredientNumber - 1}-ingredient-name-and-measure`
                          }
                        >
                          <div
                            data-testid={
                              `${ingredientNumber - 1}-ingredient-step`
                            }
                            className={
                              JSON.parse(localStorage.getItem('ingredient_status'))
                                .filter((ingredient) => ingredient.id === id)[0]
                                .status[ingredientNumber - 1].clicked
                                ? 'checked' : ''
                            }
                          >
                            <label htmlFor={ ingredientNumber - 1 }>
                              <input
                                type="checkbox"
                                name={ ingredientNumber - 1 }
                                id={ ingredientNumber - 1 }
                                onChange={
                                  () => { handleChange((ingredientNumber - 1)); }
                                }
                                checked={
                                  JSON.parse(localStorage.getItem('ingredient_status'))
                                    .filter((ingredient) => ingredient.id === id)[0]
                                    .status[ingredientNumber - 1].clicked
                                }
                              />
                              {formattedString}
                            </label>
                          </div>
                        </div>
                      )
                  );
                }
                return null;
              })}
            </div>
            <p data-testid="instructions">{el.strInstructions}</p>
            {pathname.includes('/meals') && <iframe
              src={ el.strYoutube.replace('watch?v=', 'embed/') }
              title="recipe-video"
              data-testid="video"
            />}
          </div>
        ))}
        <Swiper spaceBetween={ 10 } slidesPerView={ 2 }>
          {recommedations.filter((_el, index) => index < MAX_RECOMMENDATIONS)
            .map((recommedation, index) => (
              <SwiperSlide key={ recommedation[invertedStrMealOrDrink] }>
                <div data-testid={ `${index}-recommendation-card` }>
                  <img
                    src={ recommedation[invertedMealOrDrinkThumb] }
                    alt={ `${invertedStrMealOrDrink}-thumb` }
                  />
                  <p data-testid={ `${index}-recommendation-title` }>
                    {recommedation[invertedStrMealOrDrink] }
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </main>
      <footer>
        <StartRecipeButton />
      </footer>
    </>
  );
}
