import { Link } from '@inertiajs/react'
import PropTypes from 'prop-types'
import React from 'react'
import PageTitle from '../../../Components/PageTitle'
import AuthLayout from '../../../Layouts/AuthLayout'

function MahasiswaIndex({ auth, mahasiswa }) {
  return (
    <AuthLayout title="Mahasiswa">
      <PageTitle auth={auth} title="Mahasiswa" />

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr className="text-center">
                  <th className="col-4">Nama</th>
                  <th className="col-2">Email</th>
                  <th className="col-2">NISN</th>
                  <th className="col-3">Asal Sekolah</th>
                  <th className="col-1">
                    <i className="fa-solid fa-fw fa-screwdriver-wrench" />
                  </th>
                </tr>
              </thead>
              <tbody className="border-top-0">
                {mahasiswa.length !== null ? mahasiswa.map((mhs) => (
                  <tr className="text-center align-middle" key={mhs.id}>
                    <td>{mhs.nama_lengkap}</td>
                    <td>{mhs.email}</td>
                    <td>{mhs.mahasiswa_data.nisn.nisn}</td>
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
        </div>
      </div>
    </AuthLayout>
  )
}

MahasiswaIndex.propTypes = {
  auth: PropTypes.objectOf(PropTypes.object).isRequired,
  mahasiswa: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default MahasiswaIndex
