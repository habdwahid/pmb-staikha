import PropTypes from 'prop-types'
import React from 'react'

function Layout({ children }) {
  return (
    <main className="py-4">
      <section className="pb-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-lg-8">
              <div className="card rounded-0 shadow">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-3 col-md-2">
                      <img src="/assets/img/staikha.png" alt="STAIKHA" className="img-fluid" />
                    </div>
                    <div className="col-9 col-md-10 text-center">
                      <h3 className="card-title m-0">STAIKHA</h3>
                      <h6 className="card-text fw-medium mt-0">Sekolah Tinggi Agama Islam KH. Abdul Kabier</h6>
                      <p className="card-subtitle small text-muted">Kubang, Petir, Serang</p>
                      <a href="mailto:infostaikha@staikha.ac.id" className="small text-muted text-decoration-none" target="_blank" rel="noreferrer">infostaikha@staikha.ac.id</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
