// import { Link, useNavigate } from "react-router-dom"
// import AuthForm from "../components/AuthForm"
// import { TCredential } from "../../types/Credential"
// import { useAuth } from "../../context/AuthProvider"

// const initRegister = {
//   email: '',
//   password: '',
//   username: '',
// }

// const RegisterPage = () => {
//   const navigate = useNavigate();
//   const { register } = useAuth();
//   const handleRegister = async (data: TCredential) => {
//     await register(data, () => navigate('/'));
//   }

//   return (
//     <div className="auth-container">
//       <p className="auth-title">Ready to Share Your Story? Start Here!</p>
//       <AuthForm buttonText="Register" action={handleRegister} initCredential={initRegister} />
//       <p>Already have an account? <Link to="/login" className="form-link">Login</Link> here</p>
//     </div>
//   )
// }

// export default RegisterPage