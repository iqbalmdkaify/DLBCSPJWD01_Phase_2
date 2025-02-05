import React, { useContext, createContext, PropsWithChildren } from 'react'
import { ISubmitFormData } from '../src/pages/CreateBlogPage';
import axios from 'axios';

export interface IBlogImage {
  _id: string;
  contentType: string;
  filename: string;
  data: string;
}

export interface IBlogData {
  _id: string;
  title: string;
  content: string;
  blogImage: IBlogImage[];
  likes: number;
  author: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

type TBlogContextType = {
  getBlogs: () => Promise<IBlogData[] | []>;
  getBlog: (id: string) => Promise<IBlogData | []>;
  submitBlogData: (blogData: ISubmitFormData) => Promise<void>;
}

const BlogDataContext = createContext<TBlogContextType | null>(null);

export const useBlogData = () => {
  const blogDataContext = useContext(BlogDataContext);

  if (!blogDataContext) {
    throw new Error('useBlogData must be used within an BlogDataProvider');
  }

  return blogDataContext;
}

const BlogDataProvider = ({ children }: PropsWithChildren) => {

  const getBlogs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_ROOT_API}blogs`, {
        withCredentials: false,
      });

      if (response.status === 200) {
        const blogs = response.data;
        console.log(blogs);
        return blogs;
      } else {
        console.log('Failed to fetch blogs');
        return [];
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
      return [];
    }
  }

  const getBlog = async (id: string) => {

    try {
      const response = await axios({
        method: 'GET',
        url: `${import.meta.env.VITE_ROOT_API}blogs/:${id}`,
        withCredentials: true,
      });

      if (response.status === 200) {
        const blog = await response.data;
        return blog;
      } else {
        console.log('Failed to fetch blog');
        return [];
      }
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  const submitBlogData = async (submitFormData: ISubmitFormData) => {

    try {
      const response = await axios({
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        url: `${import.meta.env.VITE_ROOT_API}create-blog`,
        withCredentials: true,
        data: submitFormData,
      });

      if (response.status === 201) {
        const blog = await response.data;
        console.log(blog);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <BlogDataContext.Provider value={{ getBlogs, getBlog, submitBlogData }}>
      {children}
    </BlogDataContext.Provider>
  )
}

export default BlogDataProvider;