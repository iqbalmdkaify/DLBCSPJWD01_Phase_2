import { useReducer, useState } from "react";
import Button from "./Button";
import ErrorComponent from "../layout/ErrorComponent";

type ErrorStateType = {
  emailError: string;
  passwordError: string;
  usernameError: string;
};

type ErrorActionType =
  | { type: 'SET_EMAIL_ERROR'; payload: string }
  | { type: 'SET_PASSWORD_ERROR'; payload: string }
  | { type: 'SET_USERNAME_ERROR'; payload: string }
  | { type: 'RESET_ERRORS' };

export interface Credential {
  email: string;
  password: string;
  username?: string;
}

const initialErrorState: ErrorStateType = {
  emailError: '',
  usernameError: '',
  passwordError: '',
};

const errorReducer = (state: ErrorStateType, action: ErrorActionType): ErrorStateType => {
  switch (action.type) {
    case "SET_EMAIL_ERROR":
      return { ...state, emailError: action.payload };
    case "SET_USERNAME_ERROR":
      return { ...state, usernameError: action.payload };
    case "SET_PASSWORD_ERROR":
      return { ...state, passwordError: action.payload };
    case "RESET_ERRORS":
      return initialErrorState;
    default:
      return state;
  }
};

type TAuthFormProps = {
  buttonText: "Login" | "Register";
  action: (data: Credential) => void;
  initCredential: Credential;
};

const AuthForm = ({ buttonText, action, initCredential }: TAuthFormProps) => {
  const [credentials, setCredentials] = useState<Credential>(initCredential);
  const [errorState, dispatch] = useReducer(errorReducer, initialErrorState);

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        dispatch({ type: "SET_EMAIL_ERROR", payload: "" });
        break;
      case "username":
        dispatch({ type: "SET_USERNAME_ERROR", payload: "" });
        break;
      case "password":
        dispatch({ type: "SET_PASSWORD_ERROR", payload: "" });
        break;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (name === "email") {
      if (value === "") {
        dispatch({ type: "SET_EMAIL_ERROR", payload: "Email is required" });
      } else if (!emailRegex.test(value)) {
        dispatch({ type: "SET_EMAIL_ERROR", payload: "Incorrect email format" });
      }
    }

    // Username validation
    const usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;
    if (name === "username") {
      if (!value) {
        dispatch({ type: "SET_USERNAME_ERROR", payload: "Username is required" });
      } else if (!usernameRegex.test(value)) {
        dispatch({ type: "SET_USERNAME_ERROR", payload: "Must include numbers and letters" });
      }
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (name === "password") {
      if (!value) {
        dispatch({ type: "SET_PASSWORD_ERROR", payload: "Password is required" });
      } else if (!passwordRegex.test(value)) {
        dispatch({ type: "SET_PASSWORD_ERROR", payload: "Must have at least one letter, one number, and be at least 6 characters long." });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });

    validateInput(e); // Validate input on change
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Optionally resetting errors before submitting
    dispatch({ type: 'RESET_ERRORS' });
    action(credentials);
  };

  return (
    <form className="flex flex-col gap-8 lg:gap-4 mt-8 lg:mt-10 min-w-full px-8 md:min-w-[500px] lg:min-w-[500px]">
      <div>
        <p>Enter your email here *</p>
        {errorState.emailError && <ErrorComponent message={errorState.emailError} type="Warning" />}
        <input type="email" name="email" onChange={handleChange} value={credentials.email} className="w-full lg:mt-2 px-9 py-[1.20rem] outline-offset-2 focus:outline outline-[2px] outline-dark" />
        {/* <input type="email" name="email" className="w-full lg:mt-2 px-9 py-[1.20rem] outline-offset-2 focus:outline outline-[2px] outline-dark" /> */}
      </div>
      {buttonText === "Register" && (
        <div>
          <p>Enter your username here *</p>
          {errorState.usernameError && <ErrorComponent message={errorState.usernameError} type="Warning" />}
          <input type="text" name="username" onChange={handleChange} value={credentials.username} className="w-full lg:mt-2 px-9 py-[1.20rem] outline-offset-2 focus:outline outline-[2px] outline-dark" />
        </div>
      )}
      {buttonText === "Register" && (
        <div>
          <p>Enter your username here *</p>
          {errorState.usernameError && <ErrorComponent message={errorState.usernameError} type="Warning" />}
          <input type="text" name="username" onChange={handleChange} value={credentials.username} className="w-full lg:mt-2 px-9 py-[1.20rem] outline-offset-2 focus:outline outline-[2px] outline-dark" />
          {/* <input type="text" name="username" className="w-full lg:mt-2 px-9 py-[1.20rem] outline-offset-2 focus:outline outline-[2px] outline-dark" /> */}
        </div>
      )}
      <div>
        <p>Enter your password here *</p>
        {errorState.passwordError && <ErrorComponent message={errorState.passwordError} type="Warning" />}
        <input type="password" name="password" onChange={handleChange} value={credentials.password} className="w-full lg:mt-2 px-9 py-[1.20rem] outline-offset-2 focus:outline outline-[2px] outline-dark" />
        {/* <input type="password" name="password" className="w-full lg:mt-2 px-9 py-[1.20rem] outline-offset-2 focus:outline outline-[2px] outline-dark" /> */}
      </div>
      <Button text={buttonText} action={handleSubmit} />
      {/* <Button text={buttonText} /> */}
    </form>
  );
};

export default AuthForm;
