import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { CategoryPage } from '../pages/CategoryPage';
import { FavoritesPage } from '../pages/FavoritePage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { RecipeDetailPage } from '../pages/RecipeDetailPage';
import { SearchPage } from '../pages/SearchPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },

      { path: 'category/:categoryName', element: <CategoryPage /> },

      { path: 'recipe/:id', element: <RecipeDetailPage /> },

      { path: 'favorites', element: <FavoritesPage /> },

      { path: 'search', element: <SearchPage /> },

      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
