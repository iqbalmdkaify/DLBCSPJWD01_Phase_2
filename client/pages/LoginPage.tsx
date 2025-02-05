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
    <div className="auth-container">
      <p className="auth-title">Login</p>
      {/* <AuthForm buttonText="Login" action={handleLogin} initCredential={initLogin} /> */}
      <AuthForm buttonText="Login" />
      <p>Don't have an account yet? <Link to="/register" className="form-link">Register</Link> here</p>
    </div>
  )
}

export default LoginPage