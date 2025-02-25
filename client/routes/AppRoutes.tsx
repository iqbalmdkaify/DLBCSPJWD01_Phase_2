/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { loginAction, registerAction, submitBlogAction } from '../services/actions';
import { getBlogs } from '../services/api';
import { HomePage, AboutPage, LoginPage, NotFoundPage, BlogPage, CreateBlogPage, RegisterPage } from '../pages/main';
import Layout from '../src/components/layout/Layout';
import { Blog } from '../types/Global';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        // loader: blogLoader,
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'create-blog',
        element: <CreateBlogPage />,
        // action: submitBlogAction,
      },
      {
        path: '/blogs/:id',
        element: <BlogPage />,
        // loader: blogByIdLoader,
      },
    ]
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <LoginPage />,
        // action: loginAction,
      },
      {
        path: 'register',
        element: <RegisterPage />,
        // action: registerAction,
      },
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

const AppRoutes: React.FC = () => <RouterProvider router={router} />;


export default AppRoutes

// Loader functions
async function blogLoader(): Promise<Blog[]> {
  const response = await getBlogs();
  console.log(response)
  return response;
}