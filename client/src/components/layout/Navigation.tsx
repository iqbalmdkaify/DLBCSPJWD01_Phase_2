import NavItem from "../common/NavItem";

const Navigation = () => {

  return (
    <header>
      <nav className="bg-transparent md:flex items-center justify-between py-8 lg:py-16">
        <p className="font-medium text-2xl lg:text-4xl">Blogify</p>
        <div className="md:flex items-center gap-5 text-base font-light text-dark">

          {/* TODO: Username if authenticated */}
          <p className="md:pr-6">Welcome User</p>

          <NavItem route="/">blog</NavItem>
          <NavItem route="/about">About Us</NavItem>
          <NavItem route="/create-blog">Create Blog</NavItem>
          <NavItem route="/auth/login">login</NavItem>
        </div>
      </nav>
    </header>
  )
}

export default Navigation;