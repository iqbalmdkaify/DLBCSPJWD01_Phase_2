import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Blog, BlogFormSubmitData, BlogImage, SubmitResponse, UserLoginData, UserRegisterData } from '../types/Global';

const BASE_URL = import.meta.env.VITE_ROOT_API;

export type BlogResponseType = {
  id: string,
  heading: string;
  info: {
    author: string,
    createdAt: string
  },
  image: BlogImage[]
}

const fetchData = async <T>(url: string, options?: AxiosRequestConfig): Promise<T> => {

  try {
    const response: AxiosResponse<T> = await axios({
      method: options?.method || 'GET',
      url: `${BASE_URL}${url}`,
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Request failed ${response.statusText}`);
    }

  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Request failed')
    }

    throw new Error('An unexpected error has occured');
  }
};

// blogs api
const getBlogs = async (): Promise<BlogResponseType[]> => {
  const res = await fetchData<Blog[]>('/blogs', {
    withCredentials: true,
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

const submitBlogData = async (blogData: BlogFormSubmitData): Promise<Blog> => {

  try {
    const res = await fetchData<Blog>('/create-blog', {
      method: 'POST',
      data: blogData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    return res;

  } catch (err) {
    throw new Error(`Error occured: ${err}`);
  }
};

// OPTIONAL: updateLikesCount function for making likes count component responsive

// auth api
const loginUser = async (loginData: UserLoginData): Promise<SubmitResponse> => {
  try {
    const res = await fetchData<SubmitResponse>('/auth/login', {
      method: 'POST',
      data: loginData,
      withCredentials: true,
    });

    return res;

  } catch (err) {
    throw new Error(`Error Auth: ${err}`);
  }
}

const registerUser = async (registerData: UserRegisterData): Promise<SubmitResponse> => {
  try {
    const res = await fetchData<SubmitResponse>('/auth/register', {
      method: 'POST',
      data: registerData,
      withCredentials: true,
    });

    return res;

  } catch (err) {
    throw new Error(`Error Auth: ${err}`);
  }
}

export {
  getBlogs,
  getBlogsById,
  submitBlogData,
  loginUser,
  registerUser,
  BASE_URL,
}
