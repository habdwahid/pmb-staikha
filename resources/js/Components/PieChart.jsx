import PropTypes from 'prop-types'
import React from 'react'
import { Pie } from 'react-chartjs-2'

function PieChart({ data, options }) {
  return <Pie data={data} options={options} />
}

PieChart.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
}

export default PieChart
