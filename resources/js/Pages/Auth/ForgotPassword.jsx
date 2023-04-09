import { Link, useForm } from '@inertiajs/react'
import PropTypes from 'prop-types'
import React from 'react'
import Alert from '../../Components/Alert'
import InvalidFeedback from '../../Components/InvalidFeedback'
import GuestLayout from '../../Layouts/GuestLayout'

function ForgotPassword({ status }) {
  const {
    data, errors, setData, post, processing,
  } = useForm({
    email: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    post('/forgot-password')
  }

  return (
    <GuestLayout title="Lupa Password">
      <form onSubmit={handleSubmit}>
        <Alert type="success" message={status} />
        <div className="mb-4">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" id="email" className={`form-control ${errors.email && 'is-invalid'}`} value={data.email} onChange={(e) => setData({ email: e.target.value })} maxLength={128} placeholder="Email" required />
          <InvalidFeedback message={errors.email} />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Link href="/login" className="small">Login</Link>
          <button type="submit" className="btn btn-success" disabled={processing}>Kirim</button>
        </div>
      </form>
    </GuestLayout>
  )
}

ForgotPassword.propTypes = {
  status: PropTypes.string,
}

export default ForgotPassword
