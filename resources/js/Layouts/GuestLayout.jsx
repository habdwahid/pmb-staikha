import { Head } from '@inertiajs/react'
import PropTypes from 'prop-types'
import React from 'react'

function GuestLayout({ children, title }) {
  return (
    <>
      <Head title={`${title} - PMB STAIKHA`} />
      <main>
        <section>
          <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
              <div className="col col-md-6 col-lg-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="text-center mb-2">
                      <img src="/assets/img/staikha.png" alt="STAIKHA" height={80} />
                    </div>
                    <h5 className="fw-normal text-center">{title}</h5>
                    <hr className="text-muted" />
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

GuestLayout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
}

export default GuestLayout
