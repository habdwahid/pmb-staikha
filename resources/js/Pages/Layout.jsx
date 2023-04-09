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
                      <h6 className="card-text fw-medium m-0">Sekolah Tinggi Agama Islam KH. Abdul Kabier</h6>
                      <h3 className="card-title text-success">(STAIKHA)</h3>
                      <p className="card-subtitle small text-muted">Jl. KH. Abdul Kabier KM 02, Kubang-Petir-Serang-Banten</p>
                      <div className="d-flex justify-content-center gap-2">
                        <a href="mailto:infostaikha@staikha.ac.id" className="small text-muted text-decoration-none" target="_blank" rel="noreferrer">Email: infostaikha@staikha.ac.id</a>
                        <a href="tel:6285281755964" className="small text-muted text-decoration-none" target="_blank" rel="noreferrer">Telp: +62 852-8175-5964</a>
                      </div>
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
