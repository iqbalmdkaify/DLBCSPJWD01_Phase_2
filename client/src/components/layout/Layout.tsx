import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='px-6 md:px-10 lg:px-16 xl:px-[4.8rem] bg-light min-h-screen flex flex-col'>
      <Navigation />

      <main className='py-6 lg:my-12 flex-grow'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout