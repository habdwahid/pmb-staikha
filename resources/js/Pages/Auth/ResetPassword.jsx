import { useForm } from '@inertiajs/react'
import PropTypes from 'prop-types'
import React from 'react'
import InvalidFeedback from '../../Components/InvalidFeedback'
import GuestLayout from '../../Layouts/GuestLayout'

function ResetPassword({ email, token }) {
  const {
    data, errors, post, setData, processing,
  } = useForm({
    token,
    email,
    password: '',
    password_confirmation: '',
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

    post(route('password.store'))
  }

  return (
    <GuestLayout title="Reset Password">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" id="email" className={`form-control ${errors.email && 'is-invalid'}`} value={data.email} onChange={handleChange} required />
          <InvalidFeedback message={errors.email} />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" id="password" className={`form-control ${errors.password && 'is-invalid'}`} value={data.password} onChange={handleChange} maxLength="255" required />
          <InvalidFeedback message={errors.password} />
        </div>
        <div className="mb-4">
          <label htmlFor="password_confirmation" className="form-label">Konfirmasi Password</label>
          <input type="password" name="password_confirmation" id="password_confirmation" className={`form-control ${errors.password_confirmation && 'is-invalid'}`} value={data.password_confirmation} onChange={handleChange} required />
          <InvalidFeedback message={errors.password_confirmation} />
        </div>
        <div className="text-end">
          <button type="submit" className="btn btn-success" disabled={processing}>Ubah Password</button>
        </div>
      </form>
    </GuestLayout>
  )
}

ResetPassword.propTypes = {
  email: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
}

export default ResetPassword
