import React, { useState } from 'react'

function Navbar() {
  const [isToggleActive, setToggleActive] = useState(false)

  const handleToggleClick = (e) => {
    e.preventDefault()

    setToggleActive(!isToggleActive)
    document.body.classList.toggle('sb-sidenav-toggled')
    localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'))
  }

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <p className="navbar-brand ps-3">
        <img src="/assets/img/staikha.png" alt="STAIKHA" height="24" className="align-text-bottom" />
        {' '}
        PMB STAIKHA
      </p>
      <button type="button" className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 text-muted" onClick={handleToggleClick}>
        <i className="fa-solid fa-fw fa-bars" />
      </button>
    </nav>
  )
}

export default Navbar
