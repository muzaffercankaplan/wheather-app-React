import { DateTime } from 'luxon'
import React from 'react'
import { useMainContext } from '../../Context/Context'

const DailyCard = ({ item }) => {

    const { data } = useMainContext()

    const card = data.daily?.slice(1, 8)


    const formatToLocalTime = (
        secs,
        format = "cccc"
    ) => DateTime.fromSeconds(secs).toFormat(format);

    const iconUrlFromCode = (code) =>
        `http://openweathermap.org/img/wn/${code}@2x.png`;

    return (
        <div className='card_container'>
            {Array.isArray(card) ? (card).map(e =>
                <div className='weather_container'>
                    <div className='card_title'> {formatToLocalTime(e.dt)}  </div>
                    <div className='card_img'> <img src={iconUrlFromCode(e.weather[0].icon)} alt="" /> </div>
                    <div className='card_temp'> {e.temp.day.toFixed()} </div>
                    <div className='card_min_max'>
                        <div className='card_min'> min: {e.temp.min.toFixed()} </div>
                        <div className='card_max'> max: {e.temp.max.toFixed()} </div>
                    </div>
                </div>
            ) : null}

        </div>


    )
}

export default DailyCard;