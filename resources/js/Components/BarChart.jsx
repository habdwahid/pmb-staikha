import PropTypes from 'prop-types'
import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart({ data, options }) {
  return <Bar data={data} options={options} />
}

BarChart.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
}

export default BarChart
