/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useNavigate } from "react-router-dom"
import AuthForm from "../src/components/common/AuthForm"
// import { TCredential } from "../../types/Credential"
// import { useAuth } from "../../context/AuthProvider"
import React from "react"

const initRegister = {
  email: '',
  password: '',
  username: '',
}

const RegisterPage = () => {
  // const navigate = useNavigate();
  // const { register } = useAuth();
  // const handleRegister = async (data: TCredential) => {
  //   await register(data, () => navigate('/'));
  // }

  return (
    <div className="min-h-screen bg-light flex flex-col items-center justify-center text-dark">
      <p className="font-medium lg:font-semibold text-4xl lg:text-5xl text-center">Ready to Share Your Story? Start Here!</p>
      {/* <AuthForm buttonText="Register" action={handleRegister} initCredential={initRegister} /> */}
      <AuthForm buttonText="Register" />
      <p className="text-base font-light mt-4 lg:mt-10">Already have an account? <Link to="/auth/login" className="underline">Login</Link> here</p>
    </div>
  )
}

export default RegisterPage