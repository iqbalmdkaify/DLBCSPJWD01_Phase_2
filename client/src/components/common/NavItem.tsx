import React from 'react'
import { NavLink } from 'react-router-dom';

type NavItemProps = {
  children: React.ReactNode;
  route: string;
}

const NavItem = ({ children, route }: NavItemProps) => {
  return (
    <NavLink className={({ isActive }) => (isActive ? "border-b-[1px] border-dark" : "border-0")} to={route}>
      {children}
    </NavLink>
  )
}

export default NavItem