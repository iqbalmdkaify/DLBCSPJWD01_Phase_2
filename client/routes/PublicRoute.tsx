import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Provider/AuthProvider';

type TPublicRouteProps = PropsWithChildren;

const PublicRoute = ({ children }: TPublicRouteProps) => {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to='/' />
  }

  return (
    <>
      {children}
    </>
  )
}

export default PublicRoute