import { ActionFunction, redirect } from "react-router-dom";
import { loginUser, registerUser, submitBlogData } from "./api";
import { BlogFormSubmitData } from "../types/Global";

const loginAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const loginData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    const response = await loginUser(loginData);

    if (response.statusCode === 200) {
      return redirect("/");
    } else {
      return { error: response.message }
    }
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Unknown error occurred" };
  }
};

const registerAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const registerData = {
    username: formData.get("username") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  try {
    const response = await registerUser(registerData);

    if (response.statusCode === 201) {
      return redirect("/");
    } else {
      return { error: response.message }
    }
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Unknown error occurred" };
  }
};

const submitBlogAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const submitData: BlogFormSubmitData = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
    blogImage: JSON.parse(formData.get('blogImage') as string),
    likesCount: Number(formData.get('likesCount') || 0), // Default to 0
    author: formData.get('author') as string,
  };

  try {
    const response = await submitBlogData(submitData);

    return redirect(`/blogs/${response._id}`);
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Unknown error occurred" };
  }

}

export {
  loginAction,
  registerAction,
  submitBlogAction,
}