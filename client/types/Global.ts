interface BlogImage {
  _id: string;
  contentType: string;
  filename: string;
  data: string;
}

interface Blog {
  _id: string;
  title: string;
  content: string;
  blogImage: BlogImage[];
  author: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface SubmitResponse {
  statusCode: number;
  message: string;
}

type BlogFormData = {
  title: string;
  content: string;
  blogImage: File | null;
}

type BlogFormSubmitData = BlogFormData & {
  author: string | null;
}

interface ContactFormData {
  email: string;
  message: string;
}

interface UserRegisterData {
  username: string;
  password: string;
  email: string;
}

type UserLoginData = Omit<UserRegisterData, 'username'>;

interface UserInfo {
  username: string;
}

export type {
  BlogImage,
  Blog,
  SubmitResponse,
  BlogFormData,
  BlogFormSubmitData,
  UserRegisterData,
  UserLoginData,
  UserInfo,
  ContactFormData,
}