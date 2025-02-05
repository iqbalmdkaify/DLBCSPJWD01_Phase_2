import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import AuthProvider from '../context/AuthProvider.tsx'
import AppRoutes from '../routes/AppRoutes.tsx'
// import './App.css';
import './index.css';
// import './media.css';

// {
//   path: "/login",
//   element: <PublicRoute>
//     <LoginPage />
//   </PublicRoute>
// },
// {
//   path: "/register",
//   element: <PublicRoute>
//     <RegisterPage />
//   </PublicRoute>
// },

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <AuthProvider> */}
    <AppRoutes />
    {/* </AuthProvider> */}
  </StrictMode>,
)
