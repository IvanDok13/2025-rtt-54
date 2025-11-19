import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import type { AuthContextType } from '../types';

export function AdminPage() {
  const { isAuth } = useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth === false) navigate('/login');
  }, [isAuth, navigate]);

  return (
    <main>
      <h2>Welcome to the Admin Page</h2>
    </main>
  );
}
