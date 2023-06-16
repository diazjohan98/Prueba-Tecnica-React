import './dashboardStyle.css'
import barChart  from '../../../assets/img/barChart.png'
import BestSellingPage from '../../../components/bestSelling/BestSellingPage'
import FourImagesBar from '../../../components/BarchartFour/FourImagesBar'

const DashboardPage = () => {
  return (
    <div className="containerDashboard">
      <div className='containerTitle'>
        <p className="tituloDashboard">
          Dashboard /
        </p>
      </div>
      <div className='containerPrincipalDashboard'>
        <BestSellingPage/>
        <img src={barChart} alt="" className='imgBarchat'/>
      </div>

      <div className='containerFourBarchar'>
        <FourImagesBar/>
      </div>
    </div>
  )
}

export default DashboardPage
