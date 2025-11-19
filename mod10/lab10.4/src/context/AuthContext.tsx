import { createContext, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import type { AuthContextType } from '../types';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsAuth(true);
    navigate('/admin');
  };
  const logout = () => {
    setIsAuth(false);
  };

  const values: AuthContextType = { isAuth, login, logout };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
