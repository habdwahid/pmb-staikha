import { useForm } from '@inertiajs/react'
import PropTypes from 'prop-types'
import React from 'react'
import InvalidFeedback from '../../Components/InvalidFeedback'
import PageTitle from '../../Components/PageTitle'
import AuthLayout from '../../Layouts/AuthLayout'

function Settings({ auth }) {
  const {
    data, errors, put, processing, setData,
  } = useForm({
    newPassword: '',
    password: '',
  })

  const handleChange = (e) => {
    const { id: key, value } = e.target

    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    put(route('panel.settings.update'))
  }

  return (
    <AuthLayout title="Pengaturan">
      <PageTitle auth={auth} title="Pengaturan" />

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="password" className="form-label">Kata sandi saat ini</label>
                  <input type="password" name="password" id="password" className={`form-control ${errors.password && 'is-invalid'}`} value={data.password} onChange={handleChange} required />
                  {errors.password && <InvalidFeedback message={errors.password} />}
                </div>
                <div className="mb-4">
                  <label htmlFor="newPassword" className="form-label">Kata sandi baru</label>
                  <input type="password" name="newPassword" id="newPassword" className={`form-control ${errors.newPassword && 'is-invalid'}`} value={data.newPassword} onChange={handleChange} maxLength="255" required />
                  {errors.newPassword && <InvalidFeedback message={errors.newPassword} />}
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-dark" disabled={processing}>Simpan</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

Settings.propTypes = {
  auth: PropTypes.object.isRequired,
}

export default Settings
