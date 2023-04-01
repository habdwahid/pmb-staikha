import { Head, router } from '@inertiajs/react'
import React, { useState } from 'react'
import Alert from '../../Components/Alert'
import InvalidFeedback from '../../Components/InvalidFeedback'

function Login({ csrf_token, errors }) {
  const [values, setValues] = useState({
    email: '',
    password: '',
    remember: true,
  })

  const handleChange = (e) => {
    const { id: key, value } = e.target

    setValues((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const handleClick = () => {
    setValues((prevState) => ({
      ...prevState,
      remember: !values.remember,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    router.post('/login', {
      _token: csrf_token,
      email: values.email,
      password: values.password,
      remember: values.remember,
    })
  }

  return (
    <>
      <Head title="Login" />
      <main>
        <section>
          <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
              <div className="col col-md-6 col-lg-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="text-center">
                      <img src="/assets/img/staikha.png" alt="STAIKHA" height={80} />
                    </div>
                    <hr className="text-muted" />
                    <form noValidate onSubmit={handleSubmit}>
                      <Alert type="danger" message={errors.status} />
                      <div className="mb-2">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" id="email" className={`form-control ${errors.email || errors.status && 'is-invalid'}`} value={values.email} placeholder="Email" maxLength="128" onChange={handleChange} required />
                        <InvalidFeedback message={errors.email} />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" id="password" className={`form-control ${errors.email || errors.status && 'is-invalid'}`} value={values.password} placeholder="Password" maxLength="255" onChange={handleChange} required />
                        <InvalidFeedback message={errors.password} />
                      </div>
                      <div className="form-check mb-4">
                        <input type="checkbox" name="remember" id="remember" className="form-check-input" value={values.remember} onChange={handleClick} defaultChecked />
                        <label htmlFor="remember" className="form-check-label">Ingat Saya</label>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <a href="/forgot-password" className="small">Lupa Password?</a>
                        <button type="submit" className="btn btn-success">Login</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login
