// import React, { PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { useEffect } from 'react';

const PublicRoute = () => {
  const { isAuth, checkAuthStatus } = useAuth();

  useEffect(() => {
    checkAuthStatus();

  }, []);

  if (!isAuth) {
    return <Navigate to="/auth/login" />
  } else {
    return <Outlet />
  }
}

export default PublicRoute