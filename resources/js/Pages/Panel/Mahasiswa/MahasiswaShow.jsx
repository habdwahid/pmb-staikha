import PropTypes from 'prop-types'
import React from 'react'
import PageTitle from '../../../Components/PageTitle'
import AuthLayout from '../../../Layouts/AuthLayout'

function MahasiswaShow({ auth, mahasiswa }) {
  const currency = Intl.NumberFormat()

  const mhs = mahasiswa

  return (
    <AuthLayout title="Detail Mahasiswa">
      <PageTitle auth={auth} title="Detail Mahasiswa" />

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th className="col-4 col-md-2" />
                  <th className="col-1" />
                  <th className="col-7 col-md-9" />
                </tr>
              </thead>
              <tbody className="border-top-0" key={mhs.id}>
                <tr>
                  <td className="fw-semibold">Data Diri</td>
                </tr>
                <tr>
                  <td>Nama</td>
                  <td className="text-end">:</td>
                  <td>{mhs.nama_lengkap}</td>
                </tr>
                <tr>
                  <td>NIK</td>
                  <td className="text-end">:</td>
                  <td>{mhs.nik.nik}</td>
                </tr>
                <tr>
                  <td>Tempat, Tanggal Lahir</td>
                  <td className="text-end">:</td>
                  <td>
                    {`${mhs.mahasiswa_data.tempat_lahir}, ${mhs.mahasiswa_data.tanggal_lahir}`}
                  </td>
                </tr>
                <tr>
                  <td>Jenis Kelamin</td>
                  <td className="text-end">:</td>
                  <td>{mhs.mahasiswa_data.jenis_kelamin.jenis_kelamin}</td>
                </tr>
                <tr>
                  <td>Agama</td>
                  <td className="text-end">:</td>
                  <td>{mhs.mahasiswa_data.agama.agama}</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td className="text-end">:</td>
                  <td>
                    {`${mhs.mahasiswa_data.alamat}, ${mhs.mahasiswa_data.desa}, ${mhs.mahasiswa_data.kecamatan}, ${mhs.mahasiswa_data.kabupaten}, ${mhs.mahasiswa_data.provinsi} ${mhs.mahasiswa_data.kode_pos}`}
                  </td>
                </tr>
                <tr>
                  <td>Asal Sekolah</td>
                  <td className="text-end">:</td>
                  <td>{mhs.mahasiswa_data.asal_sekolah}</td>
                </tr>
                <tr>
                  <td>NISN</td>
                  <td className="text-end">:</td>
                  <td>{mhs.nisn.nisn}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td className="text-end">:</td>
                  <td>{mhs.email}</td>
                </tr>
                <tr>
                  <td>No. Handphone</td>
                  <td className="text-end">:</td>
                  <td>{mhs.phone.phone}</td>
                </tr>
                <tr>
                  <td>Program Studi</td>
                  <td className="text-end">:</td>
                  <td>{mhs.mahasiswa_data.program_studi.program_studi}</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Ayah</td>
                </tr>
                <tr>
                  <td>Nama</td>
                  <td className="text-end">:</td>
                  <td>{mhs.ayah.nama}</td>
                </tr>
                <tr>
                  <td>Tempat, Tanggal Lahir</td>
                  <td className="text-end">:</td>
                  <td>{`${mhs.ayah.tempat_lahir}, ${mhs.ayah.tanggal_lahir}`}</td>
                </tr>
                <tr>
                  <td>Pendidikan Terakhir</td>
                  <td className="text-end">:</td>
                  <td>{mhs.ayah.pendidikan.pendidikan}</td>
                </tr>
                <tr>
                  <td>Pekerjaan</td>
                  <td className="text-end">:</td>
                  <td>{mhs.ayah.pekerjaan}</td>
                </tr>
                <tr>
                  <td>Penghasilan</td>
                  <td className="text-end">:</td>
                  <td>{`Rp. ${currency.format(mhs.ayah.penghasilan)}`}</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Ibu</td>
                </tr>
                <tr>
                  <td>Nama</td>
                  <td className="text-end">:</td>
                  <td>{mhs.ibu.nama}</td>
                </tr>
                <tr>
                  <td>Tempat, Tanggal Lahir</td>
                  <td className="text-end">:</td>
                  <td>{`${mhs.ibu.tempat_lahir}, ${mhs.ibu.tanggal_lahir}`}</td>
                </tr>
                <tr>
                  <td>Pendidikan Terakhir</td>
                  <td className="text-end">:</td>
                  <td>{mhs.ibu.pendidikan.pendidikan}</td>
                </tr>
                <tr>
                  <td>Pekerjaan</td>
                  <td className="text-end">:</td>
                  <td>{mhs.ibu.pekerjaan}</td>
                </tr>
                <tr>
                  <td>Penghasilan</td>
                  <td className="text-end">:</td>
                  <td>{`Rp. ${currency.format(mhs.ibu.penghasilan)}`}</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Dokumen</td>
                </tr>
                <tr>
                  <td>Kartu Keluarga</td>
                  <td className="text-end">:</td>
                  <td>
                    <a href={route('panel.kartu-keluarga.show', mhs.mahasiswa_data.id)} className="btn-sm btn-primary text-decoration-none">
                      <i className="fa-solid fa-fw fa-eye me-1" />
                      Lihat
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Bukti Pendaftaran</td>
                  <td className="text-end">:</td>
                  <td>
                    <a href={route('panel.bukti-pendaftaran.show', mhs.bukti_pendaftaran.id)} className="btn-sm btn-primary text-decoration-none">
                      <i className="fa-solid fa-fw fa-eye me-1" />
                      Lihat
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

MahasiswaShow.propTypes = {
  auth: PropTypes.objectOf(PropTypes.object).isRequired,
  mahasiswa: PropTypes.object.isRequired,
}

export default MahasiswaShow
