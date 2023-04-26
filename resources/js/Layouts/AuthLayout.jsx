import { Head } from '@inertiajs/react'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

function AuthLayout({ children, title }) {
  useEffect(() => {
    document.body.classList.add('sb-nav-fixed')
  }, [])

  return (
    <>
      <Head>
        <title>{`${title} - PMB STAIKHA`}</title>

        <link rel="stylesheet" href="/assets/css/styles.css" />
        <link rel="stylesheet" href="/assets/css/brands.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/solid.min.css" />
      </Head>

      <Navbar />

      <Sidebar>
        {children}
      </Sidebar>
    </>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
}

export default AuthLayout
