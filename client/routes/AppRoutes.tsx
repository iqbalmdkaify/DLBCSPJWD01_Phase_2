import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { loginAction, registerAction, submitBlogAction } from '../services/actions';
import { HomePage, AboutPage, LoginPage, NotFoundPage, BlogPage, CreateBlogPage } from '../pages/main';
import Layout from '../src/components/layout/Layout';

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
    ]
  },
  {
    path: '/blogs/:id',
    element: <BlogPage />,
    // loader: blogByIdLoader,
  },
  {
    path: '/login',
    element: <LoginPage />,
    // action: loginAction,
  },
  // {
  //   path: '/register',
  //   element: <RegisterPage />,
  //   action: registerAction,
  // },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

const AppRoutes: React.FC = () => <RouterProvider router={router} />;


export default AppRoutes