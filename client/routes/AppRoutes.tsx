/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { createBrowserRouter, LoaderFunctionArgs, RouterProvider } from 'react-router-dom'
import { loginAction, registerAction, submitBlogAction } from '../services/actions';
import { BlogResponseType, getBlogs, getBlogsById } from '../services/api';
import { HomePage, AboutPage, LoginPage, NotFoundPage, BlogPage, CreateBlogPage, RegisterPage } from '../pages/main';
import Layout from '../src/components/layout/Layout';
import ProtectedRoute from './ProtectedRoute';
import AuthProvider from '../context/AuthProvider';
import { Blog } from '../types/Global';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: blogLoader,
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
        loader: blogByIdLoader,
      },
    ]
  },
  {
    path: '/auth',
    element: <ProtectedRoute />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
        action: loginAction,
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

const AppRoutes: React.FC = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);


export default AppRoutes

// Loader functions
async function blogLoader(): Promise<BlogResponseType[]> {
  const response = await getBlogs();
  console.log(response)
  return response;
}

async function blogByIdLoader({ params }: LoaderFunctionArgs): Promise<Blog> {
  const blogId = params.id;
  if (!blogId) {
    throw new Response("Blog ID is required", { status: 400 }); // Throw a 400 error if the ID is missing
  }

  const response = await getBlogsById(blogId);
  console.log(response)
  return response;
}