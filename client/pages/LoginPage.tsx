/* eslint-disable @typescript-eslint/no-unused-vars */
import AuthForm from "../src/components/common/AuthForm"
// import { TCredential } from '../../types/Credential';
// import { useAuth } from "../../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

// const initLogin = {
//   email: '',
//   password: ''
// }

const LoginPage = () => {
  // const { login } = useAuth();
  // const navigate = useNavigate();
  // const handleLogin = async (data: TCredential) => {
  //   await login(data, () => navigate('/'));
  // }
  // TODO: Implement the login function (option: use axios)
  return (
    <div className="min-h-screen bg-light flex flex-col items-center justify-center text-dark">
      <p className="font-medium lg:font-semibold text-4xl lg:text-5xl">Login</p>
      {/* <AuthForm buttonText="Login" action={handleLogin} initCredential={initLogin} /> */}
      <AuthForm buttonText="Login" />
      <p className="text-sm font-light mt-4 lg:mt-10">Don't have an account yet? <Link to="/auth/register" className="underline">Register</Link> here</p>
    </div>
  )
}

export default LoginPage