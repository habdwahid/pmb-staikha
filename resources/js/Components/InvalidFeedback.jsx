import PropTypes from 'prop-types'
import React from 'react'

function InvalidFeedback({ message }) {
  return message && (
    <div className="invalid-feedback">
      {message}
    </div>
  )
}

InvalidFeedback.propTypes = {
  message: PropTypes.string,
}

export default InvalidFeedback
