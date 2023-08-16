import React from 'react';
import RecipesDetails from './RecipeDetails';
import FinishRecipeButton from '../components/FinishRecipeButton';
import '../styles/recipes.css';

export default function RecipeInProgress() {
  return (
    // <div>RecipeInProgress</div>
    <>
      <RecipesDetails />
      <FinishRecipeButton />
    </>
  );
}
