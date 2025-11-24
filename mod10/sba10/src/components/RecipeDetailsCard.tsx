import type { RecipeCardProps } from '../types';
import { extractIngredients } from '../utils/extractIngredients';

export function RecipeDetailsCard({ recipe }: RecipeCardProps) {
  const ingredients = extractIngredients(recipe);

  return (
    <div className='max-w-[900px] bg-white rounded-xl p-6 shadow-lg border border-gray-200'>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className=' rounded-xl mb-4 shadow-sm flex justify-center m-auto max-w-[400px]'
      />
      <div className='text-gray-600 text-sm mb-4 flex flex-wrap gap-3 justify-center'>
        {recipe.strArea && (
          <span className='px-3 py-1 bg-gray-100 rounded-full text-xs'>
            {recipe.strArea}
          </span>
        )}
        {recipe.strCategory && (
          <span className='px-3 py-1 bg-gray-100 rounded-full text-xs'>
            {recipe.strCategory}
          </span>
        )}
      </div>

      <h3 className='text-xl font-semibold mb-2 text-left'>Ingredients:</h3>

      <ul className='mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2'>
        {ingredients.map((item, index) => (
          <li
            key={index}
            className='flex justify-between bg-gray-50 p-3 rounded-lg shadow-sm text-sm'
          >
            <span className='font-medium'>{item.ingredient}</span>
            <span className='opacity-70'>{item.measure}</span>
          </li>
        ))}
      </ul>

      <div className='text-gray-700 text-justify leading-relaxed whitespace-pre-line max-h-[400px] overflow-y-auto pr-2'>
        {recipe.strInstructions}
      </div>
    </div>
  );
}
