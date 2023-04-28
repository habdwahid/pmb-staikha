/* eslint-disable no-mixed-operators */
import { Link, useForm } from '@inertiajs/react'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import Alert from '../../Components/Alert'
import InvalidFeedback from '../../Components/InvalidFeedback'
import GuestLayout from '../../Layouts/GuestLayout'

function Login({ status }) {
  const {
    data, errors, setData, post, processing, reset,
  } = useForm({
    email: '',
    password: '',
    remember: true,
  })

  useEffect(() => () => {
    reset('password');
  }, [])

  const handleChange = (e) => {
    const { id: key, value } = e.target

    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const handleClick = () => {
    setData((prevState) => ({
      ...prevState,
      remember: !data.remember,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    post(route('login'))
  }

  return (
    <GuestLayout title="Login">
      <form onSubmit={handleSubmit}>
        <Alert type="danger" message={errors.status} />
        <Alert type="success" message={status} />

        <div className="mb-2">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" id="email" className={`form-control ${errors.email && 'is-invalid' || errors.status && 'is-invalid'}`} value={data.email} placeholder="Email" maxLength="128" onChange={handleChange} required />
          <InvalidFeedback message={errors.email} />
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" id="password" className={`form-control ${errors.password && 'is-invalid' || errors.status && 'is-invalid'}`} value={data.password} placeholder="Password" maxLength="255" onChange={handleChange} required />
          <InvalidFeedback message={errors.password} />
        </div>

        <div className="form-check mb-4">
          <input type="checkbox" name="remember" id="remember" className="form-check-input" value={data.remember} onChange={handleClick} defaultChecked />
          <label htmlFor="remember" className="form-check-label">Ingat Saya</label>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <Link href={route('password.request')} className="small">Lupa Password?</Link>
          <button type="submit" className="btn btn-success" disabled={processing}>Login</button>
        </div>
      </form>
    </GuestLayout>
  )
}

Login.propTypes = {
  status: PropTypes.string,
}

export default Login
