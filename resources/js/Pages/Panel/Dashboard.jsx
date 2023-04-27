import {
  ArcElement,
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,
} from 'chart.js'
import autocolors from 'chartjs-plugin-autocolors'
import PropTypes from 'prop-types'
import React from 'react'
import BarChart from '../../Components/BarChart'
import PageTitle from '../../Components/PageTitle'
import PieChart from '../../Components/PieChart'
import AuthLayout from '../../Layouts/AuthLayout'

ChartJS.register(
  ArcElement,
  autocolors,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
)

function Dashboard({
  auth,
  informasi,
  infoBrosur,
  infoKeluarga,
  infoLainnya,
  infoMediaSosial,
  infoPoster,
  infoSekolah,
  infoSpanduk,
  infoTeman,
  mhs,
  mhsMale,
  mhsFemale,
  mhsMalePerYear,
  mhsFemalePerYear,
  year,
}) {
  const barChartData = {
    labels: year,
    datasets: [
      {
        data: mhsMalePerYear.map((mhsM) => mhsM.data),
        label: 'Laki-Laki',
      },
      {
        data: mhsFemalePerYear.map((mhsF) => mhsF.data),
        label: 'Perempuan',
      },
    ],
  }

  const pieChartData = {
    labels: informasi.map((info) => info.informasi),
    datasets: [
      {
        data: [
          infoBrosur,
          infoKeluarga,
          infoLainnya,
          infoMediaSosial,
          infoPoster,
          infoSekolah,
          infoSpanduk,
          infoTeman,
        ],
        label: '#',
      },
    ],
  }

  return (
    <AuthLayout title="Dashboard">
      <PageTitle auth={auth} title="Dashboard" />

      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body fw-medium text-center">{mhs}</div>
            <div className="card-footer small text-center">
              Total Calon Mahasiswa Baru
              {' '}
              {new Date().getFullYear()}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body fw-medium text-center">{mhsMale}</div>
            <div className="card-footer small text-center">
              Calon Mahasiswa Baru
              {' '}
              {new Date().getFullYear()}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body fw-medium text-center">{mhsFemale}</div>
            <div className="card-footer small text-center">
              Calon Mahasiswi Baru
              {' '}
              {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <i className="fa-solid fa-fw fa-bar-chart me-1" />
              Calon Mahasiswa Baru dalam Tahun
            </div>
            <div className="card-body">
              <BarChart
                data={barChartData}
                options={
                {
                  responsive: true,
                  plugins: {
                    autocolors,
                  },
                }
                }
              />
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <i className="fa-solid fa-fw fa-pie-chart me-1" />
              Sumber Informasi Calon Mahasiswa Baru
              {' '}
              {new Date().getFullYear()}
            </div>
            <div className="card-body">
              <PieChart
                data={pieChartData}
                options={
                {
                  responsive: true,
                  plugins: {
                    autocolors: {
                      mode: 'data',
                    },
                  },
                }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

Dashboard.propTypes = {
  auth: PropTypes.objectOf(PropTypes.object).isRequired,
  informasi: PropTypes.arrayOf(PropTypes.object).isRequired,
  infoBrosur: PropTypes.number.isRequired,
  infoKeluarga: PropTypes.number.isRequired,
  infoLainnya: PropTypes.number.isRequired,
  infoMediaSosial: PropTypes.number.isRequired,
  infoPoster: PropTypes.number.isRequired,
  infoSekolah: PropTypes.number.isRequired,
  infoSpanduk: PropTypes.number.isRequired,
  infoTeman: PropTypes.number.isRequired,
  mhs: PropTypes.number.isRequired,
  mhsMale: PropTypes.number.isRequired,
  mhsFemale: PropTypes.number.isRequired,
  mhsMalePerYear: PropTypes.array.isRequired,
  mhsFemalePerYear: PropTypes.array.isRequired,
  year: PropTypes.array.isRequired,
}

export default Dashboard
