import { useContext, createContext, PropsWithChildren } from 'react'
import { BlogResponseType, fetchData } from '../services/api';
import { Blog, BlogFormSubmitData } from '../types/Global';
import axios from 'axios';

// export interface IBlogImage {
//   _id: string;
//   contentType: string;
//   filename: string;
//   data: string;
// }

// export interface IBlogData {
//   _id: string;
//   title: string;
//   content: string;
//   blogImage: IBlogImage[];
//   likes: number;
//   author: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

type BlogContext = {
  getBlogs: () => Promise<BlogResponseType[] | []>;
  getBlogsById: (id: string) => Promise<Blog>;
  submitBlogData: (blogData: BlogFormSubmitData) => void;
}

const BlogDataContext = createContext<BlogContext | null>(null);

export const useBlogData = () => {
  const blogDataContext = useContext(BlogDataContext);

  if (!blogDataContext) {
    throw new Error('useBlogData must be used within an BlogDataProvider');
  }

  return blogDataContext;
}

const BlogDataProvider = ({ children }: PropsWithChildren) => {

  const getBlogs = async (): Promise<BlogResponseType[]> => {
    const res = await fetchData<Blog[]>('/blogs', {
      withCredentials: false,
    });

    const modifiedResponse = res.map((data) => {
      return {
        id: data._id,
        heading: data.title,
        info: {
          author: data.author,
          createdAt: data.createdAt
        },
        image: data.blogImage
      }
    })

    return modifiedResponse
  };

  const getBlogsById = async (id: string): Promise<Blog> => {
    return await fetchData<Blog>(`/blogs/${id}`, {
      withCredentials: true,
    });
  }

  const submitBlogData = async (blogData: BlogFormSubmitData) => {
    try {
      const res = await fetchData<Blog>('/create-blog', {
        method: 'POST',
        data: blogData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });

      console.log(res)

    } catch (err) {
      throw new Error(`Error occured: ${err}`);
    }
  };

  return (
    <BlogDataContext.Provider value={{ getBlogs, getBlogsById, submitBlogData }}>
      {children}
    </BlogDataContext.Provider>
  )
}

export default BlogDataProvider;