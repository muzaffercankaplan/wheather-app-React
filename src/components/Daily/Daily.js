import React from 'react'
import Navbar from '../Navbar/Navbar'
import DailyCard from './DailyCard'
// import WeatherDetails from '../Weather/weatherDetails'

const Daily = () => {

    return (
        <div>
            <Navbar />
            <div className='dailyCard'>

                <DailyCard />

            </div>
        </div>
    )
}

export default Daily