/* eslint-disable @typescript-eslint/no-unused-vars */
import AuthForm, { Credential } from "../src/components/common/AuthForm"
import { Link, useNavigate, useSubmit } from "react-router-dom";

const initLogin = {
  email: '',
  password: ''
}

const LoginPage = () => {
  const submit = useSubmit();

  const handleLogin = async (data: Credential) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    submit(formData);
  }
  // TODO: Implement the login function (option: use axios)
  return (
    <div className="min-h-screen bg-light flex flex-col items-center justify-center text-dark">
      <p className="font-medium lg:font-semibold text-4xl lg:text-5xl">Login</p>
      <AuthForm buttonText="Login" action={handleLogin} initCredential={initLogin} />
      {/* <AuthForm buttonText="Login" /> */}
      <p className="text-sm font-light mt-4 lg:mt-10">Don't have an account yet? <Link to="/auth/register" className="underline">Register</Link> here</p>
    </div>
  )
}

export default LoginPage