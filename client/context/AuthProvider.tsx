import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { UserInfo, UserLoginData, UserRegisterData } from '../types/Global';
import axios from 'axios';

type AuthContext = {
  isAuth: boolean;
  user: UserInfo | null;
  setUser: React.Dispatch<React.SetStateAction<UserInfo | null>>;
  login: (data: UserLoginData, action: () => void) => Promise<void>;
  register: (data: UserRegisterData, action: () => void) => Promise<void>;
  logout: (action: () => void) => Promise<void>;
  checkAuthStatus: () => void;
};

// Create authentication context
const AuthContext = createContext<AuthContext | null>(null);

// Custom hook to access AuthContext
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return authContext;
};

// AuthProvider component to wrap app with authentication state
const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  // Log in user and check auth status on success
  const login = async (data: UserLoginData, action: () => void) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_ROOT_API}/auth/login`, data, {
        withCredentials: true
      });

      if (response.status === 200) {
        await checkAuthStatus(); // Fetch user details after login
        action(); // Navigate or perform post-login action
      }
    } catch (error) {
      console.log(error);
      setIsAuth(false);
    }
  };

  // Register new user and check auth status on success
  const register = async (data: UserRegisterData, action: () => void) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_ROOT_API}/auth/register`, data, {
        withCredentials: true
      });

      if (response.status === 201) {
        await checkAuthStatus(); // Fetch user details after account creation
        action(); // Navigate or perform post-register action
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Log out user and reset auth state
  const logout = async (action: () => void) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_ROOT_API}/auth/logout`, {
        withCredentials: true
      });

      if (response.status === 200) {
        await checkAuthStatus(); // Refresh state after logout
        action(); // Navigate or perform post-logout action
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Check current user authentication status
  const checkAuthStatus = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_ROOT_API}/api/protected`, {
        withCredentials: true,
      });

      if (response.status === 200 && response.data.user) {
        setUser({ username: response.data.user });
        setIsAuth(true);
      } else {
        setUser(null);
        setIsAuth(false);
      }
    } catch (error) {
      console.error("Failed to check authentication status:", error);
      setUser(null);
      setIsAuth(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isAuth, login, register, logout, checkAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
