import PropTypes from 'prop-types'
import React from 'react'
import PageTitle from '../../Components/PageTitle'
import AuthLayout from '../../Layouts/AuthLayout'

function Dashboard({ auth }) {
  return (
    <AuthLayout title="Dashboard">
      <PageTitle auth={auth} title="Dashboard" />
    </AuthLayout>
  )
}

Dashboard.propTypes = {
  auth: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default Dashboard
