import Button from '../common/Button';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { useAuth } from '../../../context/AuthProvider';

const Navigation = () => {

  // const { user, logout } = useAuth();

  // const navigate = useNavigate();

  const [menuState, setMenuState] = useState<boolean>(true);

  const toggleMenu = () => {
    setMenuState(prevState => !prevState);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setMenuState(false); // Close the menu when resizing to desktop
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <nav className='fixed top-0 z-10 w-full flex justify-between items-center md:px-navigationBarInline md:py-navigationBarBlock font-navigation p-navigationBarMobile'>

        {/* Website Logo */}
        <div>
          <Link to="/" className='text-logo tracking-logo leading-logo font-logo'>BLOGIFY</Link>
        </div>

        {/* Desktop Navigation */}
        <ul className={`absolute md:relative top-0 left-0 z-1 right-0 bg-transparent h-screen md:h-auto transition-all duration-300 md:opacity-100 opacity-0 flex flex-col md:flex-row items-center justify-center gap-8 text-navLink leading-navLink tracking-navLink font-navigation ${!menuState ? 'opacity-100' : ''}`}>

          {/* TODO:// Visibility none according to isAuth */}
          {/* {user !== null ? <li className='user-name'><p>Hello, {user.username}!</p></li> : null} */}
          <p className='text-[#800000] font-medium'>HELLO! USER</p>

          <NavLink to="/about" className={({ isActive }) => (isActive ? "text-navLinkActive font-semibold" : "font-normal")}>ABOUT</NavLink>

          <NavLink to="/create-blog" className={({ isActive }) => (isActive ? "text-navLinkActive font-semibold" : "font-normal")}>CREATE BLOG</NavLink>

          {/* TODO:// login, logout button */}
          {/* {user ? <Button text="LOGOUT" type='Primary' action={() => logout(() => navigate('/'))} /> :
            <Button text="LOGIN" type='Primary' action={() => navigate('/login')} />} */}

          {/* Mobile only Auth */}
          <Button text="LOGIN" type='Primary' customStyle='block md:hidden' />
        </ul>

        {/* Desktop only Auth */}
        <Button text="LOGIN" type='Primary' customStyle='hidden md:block' />

        {menuState ? <GiHamburgerMenu size="1.5em" color="#000000" className='block md:hidden' onClick={toggleMenu} /> :
          <RxCross1 size="1.5em" color="#000000" className='block md:hidden' onClick={toggleMenu} />}
      </nav>
    </header>
  )
}

export default Navigation;