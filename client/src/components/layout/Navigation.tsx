import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import NavItem from "../common/NavItem";
// import { UserInfo } from "../../../types/Global";

const Navigation = () => {

  const { isAuth, user } = useAuth();
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    if (isAuth) {
      setCurrentUser(user ? user.username : null)
    }
  }, [isAuth, user])

  return (
    <header>
      <nav className="bg-transparent md:flex items-center justify-between py-8 lg:py-16">
        <p className="font-medium text-2xl lg:text-4xl">Blogify</p>
        <div className="md:flex items-center gap-5 text-base font-light text-dark">

          {/* TODO: Username if authenticated */}
          <p className="md:pr-6">{currentUser ? currentUser : ""}</p>

          <NavItem route="/">blog</NavItem>
          <NavItem route="/about">About Us</NavItem>
          {isAuth && <NavItem route="/create-blog">Create Blog</NavItem>}
          <NavItem route="/auth/login">login</NavItem>
        </div>
      </nav>
    </header>
  )
}

export default Navigation;