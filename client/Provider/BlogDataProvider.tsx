import { useContext, createContext, PropsWithChildren } from 'react'
import { BlogResponseType, DeleteBlogResponse, fetchData, SubmitBlogResponse } from '../services/api';
import { Blog, BlogFormSubmitData } from '../types/Global';

type BlogContext = {
  getBlogs: () => Promise<BlogResponseType[] | []>;
  getBlogsById: (id: string) => Promise<Blog>;
  submitBlogData: (blogData: BlogFormSubmitData) => Promise<SubmitBlogResponse>;
  deleteBlog: (blog_id: string) => Promise<DeleteBlogResponse>;
}

// Create context to share blog-related data/functions
const BlogDataContext = createContext<BlogContext | null>(null);

// Custom hook to access blog context
// eslint-disable-next-line react-refresh/only-export-components
export const useBlogData = () => {
  const blogDataContext = useContext(BlogDataContext);

  if (!blogDataContext) {
    throw new Error('useBlogData must be used within an BlogDataProvider');
  }

  return blogDataContext;
}

// Provider component to wrap around parts of the app that need blog data
const BlogDataProvider = ({ children }: PropsWithChildren) => {

  // Fetch all blogs and transform them for UI usage
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

  // Fetch a single blog by ID
  const getBlogsById = async (id: string): Promise<Blog> => {
    return await fetchData<Blog>(`/blogs/${id}`, {
      withCredentials: true,
    });
  }

  // Submit blog data (including image) to backend
  const submitBlogData = async (blogData: BlogFormSubmitData): Promise<SubmitBlogResponse> => {
    const response = await fetchData<SubmitBlogResponse>('/create-blog', {
      method: 'POST',
      data: blogData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    return response
  };

  // Delete a blog by ID
  const deleteBlog = async (blog_id: string): Promise<DeleteBlogResponse> => {
    const response = await fetchData<DeleteBlogResponse>(`/delete/${blog_id}`, {
      withCredentials: true
    })

    return response
  }

  return (
    <BlogDataContext.Provider value={{ getBlogs, getBlogsById, submitBlogData, deleteBlog }}>
      {children}
    </BlogDataContext.Provider>
  )
}

export default BlogDataProvider;
