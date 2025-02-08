// import { Outlet } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
// import Footer from './Footer'

const Layout = () => {
  return (
    <div className=''>

      {/* Navigation Bar */}
      <Navigation />

      {/* Outlet */}
      <main className='outlet'>
        <Outlet />
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout