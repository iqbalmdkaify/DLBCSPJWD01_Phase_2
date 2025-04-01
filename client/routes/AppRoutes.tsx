import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage, AboutPage, LoginPage, NotFoundPage, BlogPage, CreateBlogPage, RegisterPage } from '../pages/main';
import Layout from '../src/components/layout/Layout';
import ProtectedRoute from './ProtectedRoute';
import AuthProvider from '../context/AuthProvider';
import BlogDataProvider from '../Provider/BlogDataProvider';
import PublicRoute from './PublicRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: "/blogs",
        element: <PublicRoute />,
        children: [
          {
            path: 'create-blog',
            element: <CreateBlogPage />,
          },
          {
            path: ':id',
            element: <BlogPage />,
          },
        ]
      }
    ]
  },
  {
    path: '/auth',
    element: <ProtectedRoute />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

const AppRoutes: React.FC = () => (
  <AuthProvider>
    <BlogDataProvider>
      <RouterProvider router={router} />
    </BlogDataProvider>
  </AuthProvider>
);


export default AppRoutes