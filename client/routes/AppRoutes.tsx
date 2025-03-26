/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { createBrowserRouter, defer, LoaderFunctionArgs, RouterProvider } from 'react-router-dom'
import { BlogResponseType, getBlogs, getBlogsById } from '../services/api';
import { HomePage, AboutPage, LoginPage, NotFoundPage, BlogPage, CreateBlogPage, RegisterPage } from '../pages/main';
import Layout from '../src/components/layout/Layout';
import ProtectedRoute from './ProtectedRoute';
import AuthProvider from '../context/AuthProvider';
import { Blog } from '../types/Global';
import BlogDataProvider from '../Provider/BlogDataProvider';

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
        path: 'create-blog',
        element: <CreateBlogPage />,
      },
      {
        path: '/blogs/:id',
        element: <BlogPage />,
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

// Loader functions
async function blogLoader() {
  const responsePromise = getBlogs()
  return responsePromise
}

async function blogByIdLoader({ params }: LoaderFunctionArgs): Promise<Blog> {
  const blogId = params.id;
  if (!blogId) {
    throw new Response("Blog ID is required", { status: 400 });
  }

  const response = await getBlogsById(blogId);
  console.log(response)
  return response;
}