import { Link, useNavigate } from "react-router-dom"
import AuthForm from "../src/components/common/AuthForm"
import { useAuth } from "../context/AuthProvider"
import { UserRegisterData } from "../types/Global"

const initRegister = {
  email: '',
  password: '',
  username: '',
}

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const handleRegister = async (data: UserRegisterData) => {
    await register(data, () => navigate('/'));
  }

  return (
    <div className="min-h-screen bg-light flex flex-col items-center justify-center text-dark">
      <p className="font-medium lg:font-semibold text-4xl lg:text-5xl text-center">Ready to Share Your Story? Start Here!</p>
      <AuthForm buttonText="Register" action={handleRegister} initCredential={initRegister} />
      <p className="text-base font-light mt-4 lg:mt-10">Already have an account? <Link to="/auth/login" className="underline">Login</Link> here</p>
    </div>
  )
}

export default RegisterPage