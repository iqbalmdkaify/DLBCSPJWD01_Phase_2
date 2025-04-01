import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BlogImage } from '../types/Global';

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

export {
  fetchData,
  BASE_URL,
}
