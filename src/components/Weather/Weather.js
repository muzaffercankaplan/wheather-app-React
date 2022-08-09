import React from 'react'
import { useMainContext } from '../../Context/Context'
import { fahrenheit, hot, temperature, centigrade } from "../../assets/index"
import { DateTime } from 'luxon'

const WeatherPage = () => {

  const {
    data,
    day,
    loading,
  } = useMainContext()


  const formatToLocalTime = (
    secs,
    zone,
    format = "cccc dd LLLL' | 'hh a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

  const iconUrlFromCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

  const temp = Math.round(day.main.temp)
  const feels_like = Math.round(day.main.feels_like)
  const max = Math.round(day.main.temp_max)
  const min = Math.round(day.main.temp_min)
  return (
    <div>
      <div className='img_container'>
        <img className='img_weather' src={iconUrlFromCode(day.icon)} alt="" />
      </div>
      <div className='temp_container'>
        <span className='temp_degree'> {temp}</span>
        <img className='img_degree' src={loading ? fahrenheit : centigrade} alt='' />
      </div>
      <div className='fells_like'>
        <span>fells like : </span> <span> {feels_like} </span>
      </div>
      <div className='description'>
        {day.weather}
      </div>
      <div className='max_min'>
        <span className='min'>{max} </span>
        <img className='min_img img' src={temperature} alt="" />
        <img className='max_img img' src={hot} alt="" />
        <span className='max'>{min}</span>
      </div>
      <div className='day'>
        <span className='timezone'>{formatToLocalTime(parseInt(day.dt), data.time)} </span>
      </div>
      <div className='city_name'>
        {day.name} <span> / </span>
        {day.country}
      </div>
    </div>
  )
}

export default WeatherPage