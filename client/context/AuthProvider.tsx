// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createContext, PropsWithChildren, useContext, useEffect, useState, useCallback } from 'react';
import { UserInfo } from '../types/Global';
import axios from 'axios';

type AuthContextType = {
  isAuth: boolean;
  user: UserInfo | null;
  setUser: React.Dispatch<React.SetStateAction<UserInfo | null>>;
  // login: (data: TCredential, action: () => void) => Promise<void>;
  // register: (data: TCredential, action: () => void) => Promise<void>;
  // logout: (action: () => void) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return authContext;
};

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  // const login = useCallback(
  //   async (data: TCredential, action: () => void) => {
  //     try {
  //       const response = await axios({
  //         withCredentials: true,
  //         method: 'POST',
  //         url: `${import.meta.env.VITE_ROOT_API}auth/login`,
  //         data
  //       });

  //       if (response.status === 200) {
  //         await checkAuthStatus();
  //         action();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, []
  // );

  // const register = useCallback(
  //   async (data: TCredential, action: () => void) => {
  //     try {
  //       const response = await axios({
  //         withCredentials: true,
  //         method: 'POST',
  //         url: `${import.meta.env.VITE_ROOT_API}auth/register`,
  //         data
  //       });

  //       if (response.status === 201) {
  //         await checkAuthStatus();
  //         action();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, []
  // );

  // const logout = async (action: () => void) => {
  //   try {
  //     const response = await axios({
  //       method: 'GET',
  //       withCredentials: true,
  //       url: `${import.meta.env.VITE_ROOT_API}auth/logout`
  //     });
  //     console.log(response);
  //     if (response.status === 200) {
  //       await checkAuthStatus();
  //       action();
  //     } else {
  //       console.log("Internal server error");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }

  // }

  // Function to check authentication status
  const checkAuthStatus = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_ROOT_API}/api/protected`, {
        withCredentials: true,
      });

      if (response.status === 200) {
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

  useEffect(() => {
    checkAuthStatus(); // Check authentication status on mount
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
