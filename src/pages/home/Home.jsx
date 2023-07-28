import React from 'react'
import "./home.scss"
import TopDeals from '../../components/topDeals/TopDeals'
import ChartBox from '../../components/chartBox/ChartBox'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../utils/data'
import BarChartBox from '../../components/barChartBox/BarChartBox'
import PieChartBox from '../../components/pieChartBox/PieChartBox'
import { pieChartData } from '../../utils/data'
import AreaChartBox from '../../components/areaChartBox/AreaChartBox'

const Home = () => {
  return (
    <div className='home'>

      
      <div className="box box1"><TopDeals /></div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox {...pieChartData}/></div>
      <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box7"><AreaChartBox /></div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>


    </div>
  )
}

export default Home