import { PropsWithChildren, useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

type TProtectedRouteProps = PropsWithChildren;

const ProtectedRoute = ({ children }: TProtectedRouteProps) => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Set loading to false after the initial check
    setIsLoading(false);

    // If user is null, navigate to login
    if (!isAuth) {
      navigate('/login', { replace: true });
    }
  }, [navigate, isAuth]);

  // Optionally, you can handle loading state
  if (isLoading) {
    return <div>Loading...</div>; // Or any loading indicator you prefer
  }

  return children; // Render the protected children
};

export default ProtectedRoute;