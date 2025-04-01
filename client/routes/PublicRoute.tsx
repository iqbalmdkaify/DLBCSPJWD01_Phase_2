// import React, { PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const PublicRoute = () => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/auth/login" />
  } else {
    return <Outlet />
  }
}

export default PublicRoute