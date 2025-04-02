import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import NavItem from "../common/NavItem";
import { useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navigation = () => {
  const { isAuth, user, logout } = useAuth();
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuth) {
      setCurrentUser(user ? user.username : null);
    } else {
      setCurrentUser(null);
    }
  }, [isAuth, user]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location])

  return (
    <header>
      <nav className="bg-transparent flex items-center justify-between py-8 lg:py-16 relative">
        {/* Logo */}
        <p className="font-medium text-2xl lg:text-4xl z-50">Blogify</p>

        {/* Hamburger Menu - Mobile Only */}
        <button
          className="md:hidden focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoClose className="h-8 w-8 text-black" />
          ) : (
            <RxHamburgerMenu className="h-8 w-8 text-black" />
          )}
        </button>

        {/* Navigation items */}
        <div
          className={`absolute md:static top-0 left-0 w-full h-screen md:w-auto md:h-auto pt-[10rem] md:pt-0 bg-blue-100 md:bg-transparent flex flex-col md:flex-row items-center gap-16 md:gap-6 transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
            }`}
        >
          {/* Username */}
          {currentUser && <p className="md:pr-6 font-medium">{currentUser}</p>}

          {/* Navigation links */}
          <NavItem route="/">Blog</NavItem>
          <NavItem route="/about">About Us</NavItem>
          {isAuth && <NavItem route="/blogs/create-blog">Create Blog</NavItem>}

          {/* Auth buttons */}
          <div className="md:pl-8">
            {isAuth ? (
              <button
                className="text-red-500 font-semibold"
                onClick={() => {
                  logout(() => navigate("/"));
                  setIsMenuOpen(false);
                }}
              >
                Logout
              </button>
            ) : (
              <NavItem route="/auth/login">Login</NavItem>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
