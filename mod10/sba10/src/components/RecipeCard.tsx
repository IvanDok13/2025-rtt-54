import { Link } from 'react-router-dom';
import type { RecipeCardProps } from '../types';

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      to={`/recipe/${recipe.strMeal}`}
      className='block bg-white rounded-xl p-3 text-center no-underline text-gray-800 shadow-md hover:-translate-y-1 transition-transform duration-200'
    >
      <h3 className='font-semibold text-lg mb-3 truncate'>{recipe.strMeal}</h3>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className='w-full rounded-lg mb-3'
        width='200'
      />
    </Link>
  );
}
