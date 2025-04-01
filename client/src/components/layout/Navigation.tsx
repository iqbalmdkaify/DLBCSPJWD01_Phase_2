import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import NavItem from "../common/NavItem";
import { useNavigate } from "react-router-dom";

const Navigation = () => {

  const { isAuth, user, logout } = useAuth();
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      setCurrentUser(user ? user.username : null)
    } else {
      setCurrentUser(null)
    }
  }, [isAuth, user])

  return (
    <header>
      <nav className="bg-transparent md:flex items-center justify-between py-8 lg:py-16">
        <p className="font-medium text-2xl lg:text-4xl">Blogify</p>
        <div className="md:flex items-center gap-5 text-base font-light text-dark">

          <p className="md:pr-6 font-medium">{currentUser ? currentUser : ""}</p>

          <NavItem route="/">blog</NavItem>
          <NavItem route="/about">About Us</NavItem>
          {isAuth && <NavItem route="/blogs/create-blog">Create Blog</NavItem>}
          <div className="md: pl-8">
            {isAuth ? <button onClick={() => logout(() => navigate("/"))}>logout</button> : <NavItem route="/auth/login">login</NavItem>}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navigation;