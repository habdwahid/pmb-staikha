import { Link, useForm } from '@inertiajs/react'
import PropTypes from 'prop-types'
import React from 'react'

function PageTitle({ auth, title }) {
  const { post } = useForm()

  const onLogouthandle = (e) => {
    e.preventDefault()

    post(route('logout'), {
      onSuccess: () => {
        const { body } = document
        const modal = document.querySelector('.modal-backdrop')

        body.removeAttribute('class')
        body.removeAttribute('style')
        modal.remove()
      },
    })
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between my-4">
        <h1>{title}</h1>
        <ul className="dropdown m-0">
          <button type="button" id="userDropdown" className="dropdown-toggle bg-transparent border-0" aria-expanded="false" data-bs-toggle="dropdown">
            <i className="fa-solid fa-fw fa-user" />
            {' '}
            {auth.user.name}
          </button>

          <ul className="dropdown-menu dropdown-menu-end px-2" aria-labelledby="userDropdown">
            <li>
              <Link href="#!" className="dropdown-item">Pengaturan</Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button type="submit" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#logoutModal">Logout</button>
            </li>
          </ul>
        </ul>
      </div>

      <div className="modal fade" id="logoutModal" tabIndex="-1" aria-labelledby="logoutModalLabel">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 id="logoutModalLabel" className="modal-title">Logout</h5>
              <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              Anda yakin ingin logout?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Batal</button>
              <form onSubmit={onLogouthandle}>
                <button type="submit" className="btn btn-secondary">Logout</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

PageTitle.propTypes = {
  auth: PropTypes.objectOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
}

export default PageTitle
