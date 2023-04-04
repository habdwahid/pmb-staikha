import PropTypes from 'prop-types'
import React from 'react'

function Alert({ message, type }) {
  return message && (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string.isRequired,
}

export default Alert
