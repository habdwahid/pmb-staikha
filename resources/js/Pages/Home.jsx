import { Head, useForm } from '@inertiajs/react'
import PropTypes from 'prop-types'
import React from 'react'
import Alert from '../Components/Alert'
import RegisterForm from '../Components/RegisterForm'
import Layout from './Layout'

function Home({
  agama, csrf_token, flash, informasi, jenisKelamin, pendidikan, programStudi,
}) {
  const {
    data, setData, post, progress, errors, processing,
  } = useForm({
    _token: csrf_token,
    agama: '',
    alamat: '',
    asal_sekolah: '',
    desa: '',
    email: '',
    informasi: '',
    jenis_kelamin: '',
    kabupaten: '',
    kartu_keluarga: '',
    kecamatan: '',
    kode_pos: '',
    nama_ayah: '',
    nama_ibu: '',
    nama_lengkap: '',
    nik: '',
    nisn: '',
    pekerjaan_ayah: '',
    pekerjaan_ibu: '',
    pendidikan_ayah: '',
    pendidikan_ibu: '',
    penghasilan_ayah: '',
    penghasilan_ibu: '',
    phone: '',
    program_studi: '',
    provinsi: '',
    tanggal_lahir: '',
    tanggal_lahir_ayah: '',
    tanggal_lahir_ibu: '',
    tempat_lahir: '',
    tempat_lahir_ayah: '',
    tempat_lahir_ibu: '',
  })

  const handleChange = (e) => {
    const { id: key, value } = e.target

    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const handleFileInput = (e) => {
    setData((prevState) => ({
      ...prevState,
      kartu_keluarga: e.target.files[0],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    post('/')
  }

  return (
    <>
      <Head title="Penerimaan Mahasiswa Baru - STAIKHA" />
      <Layout>
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col col-lg-8">
                <div className="card rounded-0 shadow">
                  <div className="card-body">
                    <h4 className="card-title text-center mb-4">Form Penerimaan Mahasiswa Baru</h4>
                    {flash.status ? (
                      <Alert type="success" message={flash.status} />
                    ) : (
                      <RegisterForm
                        agama={agama}
                        errors={errors}
                        handleChange={handleChange}
                        handleFileInput={handleFileInput}
                        handleSubmit={handleSubmit}
                        informasi={informasi}
                        jenisKelamin={jenisKelamin}
                        pendidikan={pendidikan}
                        processing={processing}
                        programStudi={programStudi}
                        progress={progress}
                        values={data}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

Home.propTypes = {
  agama: PropTypes.arrayOf(PropTypes.object).isRequired,
  csrf_token: PropTypes.string,
  flash: PropTypes.object,
  informasi: PropTypes.arrayOf(PropTypes.object).isRequired,
  jenisKelamin: PropTypes.arrayOf(PropTypes.object).isRequired,
  pendidikan: PropTypes.arrayOf(PropTypes.object).isRequired,
  programStudi: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Home
