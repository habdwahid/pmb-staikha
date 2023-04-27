/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link, useForm } from '@inertiajs/react'
import PropTypes from 'prop-types'
import React from 'react'
import PageTitle from '../../../Components/PageTitle'
import AuthLayout from '../../../Layouts/AuthLayout'

function MahasiswaIndex({ auth, mahasiswa }) {
  const {
    data, get, processing, setData,
  } = useForm({
    search: '',
  })

  const handleSearchChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      search: e.target.value,
    }))
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    get(route('panel.mahasiswa.index'))
  }

  return (
    <AuthLayout title="Mahasiswa">
      <PageTitle auth={auth} title="Mahasiswa" />

      <div className="card shadow-sm mb-4">
        <div className="card-body">

          <div className="row justify-content-end">
            <div className="col-md-4 col-xl-3">
              <form onSubmit={handleSearchSubmit}>
                <div className="input-group mb-3">
                  <input type="text" name="search" id="search" className="form-control form-control-sm" value={data.search} placeholder="Cari data" onChange={handleSearchChange} />
                  <button type="submit" className="btn btn-sm btn-dark" disabled={processing}><i className="fa-solid fa-fw fa-magnifying-glass" /></button>
                </div>
              </form>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr className="text-center">
                  <th className="col-3">Nama</th>
                  <th className="col-3">Jurusan</th>
                  <th className="col-2">NISN</th>
                  <th className="col-3">Asal Sekolah</th>
                  <th className="col-1">
                    <i className="fa-solid fa-fw fa-screwdriver-wrench" />
                  </th>
                </tr>
              </thead>
              <tbody className="border-top-0">
                {mahasiswa.data.length !== null ? mahasiswa.data.map((mhs) => (
                  <tr className="text-center align-middle" key={mhs.id}>
                    <td>{mhs.nama_lengkap}</td>
                    <td>{mhs.mahasiswa_data.program_studi.program_studi}</td>
                    <td>{mhs.nisn.nisn}</td>
                    <td>{mhs.mahasiswa_data.asal_sekolah}</td>
                    <td>
                      <Link href={route('panel.mahasiswa.show', mhs.id)} className="btn-sm btn-dark" title="Detail">
                        <i className="fa-solid fa-fw fa-sm fa-eye" />
                      </Link>
                    </td>
                  </tr>
                )) : (
                  <tr className="text-center">
                    <td colSpan="5" className="text-muted small">Belum ada data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <nav aria-label="Mahasiswa page navigation">
            <ul className="pagination justify-content-center">
              {mahasiswa.links.map((links, key) => (
                links.url === null ? (
                  <li className="page-item disabled">
                    <Link href={links.url} className="page-link">{links.label}</Link>
                  </li>
                ) : (
                  <li className={`page-item ${links.active && 'active'}`}>
                    <Link href={links.url} className="page-link">{links.label}</Link>
                  </li>
                )
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </AuthLayout>
  )
}

MahasiswaIndex.propTypes = {
  auth: PropTypes.objectOf(PropTypes.object).isRequired,
  mahasiswa: PropTypes.object.isRequired,
}

export default MahasiswaIndex
