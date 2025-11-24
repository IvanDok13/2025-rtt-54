import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesProvider.tsx';
import './index.css';
import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </StrictMode>
);
