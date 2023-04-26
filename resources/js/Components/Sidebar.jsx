import { Link, usePage } from '@inertiajs/react'
import PropTypes from 'prop-types'
import React from 'react'
import Footer from './Footer'

function Sidebar({ children }) {
  const { url } = usePage()

  const activeClassName = 'nav-link fw-medium active'

  return (
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div className="sb-sidenav-menu">
            <div className="nav">
              <Link href={route('panel.dashboard.index')} className={url === '/panel/dashboard' ? activeClassName : 'nav-link'}>Dashboard</Link>
              <Link href={route('panel.mahasiswa.index')} className={url.startsWith('/panel/mahasiswa') ? activeClassName : 'nav-link'}>Mahasiswa</Link>
            </div>
          </div>
        </nav>
      </div>

      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-4">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Sidebar
