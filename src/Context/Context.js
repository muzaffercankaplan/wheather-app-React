import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import cityData from "../data/cities.json"

const MainContext = createContext();


const MainProvider = ({ children }) => {
  
  const api = {
    key: process.env.WEATHER_API_KEY ,
    base: process.env.WEATHER_APİ_URL,
  }

  const [city, setCity] = useState("")
  const [coordinat, setCoordinat] = useState({
    lot: 27.8416,
    lat: 37.8560
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    cityData.map((item) => {
      if (item.name.toUpperCase() === city.toUpperCase()) {

        setCoordinat({ lot: item.longitude, lat: item.latitude })
        console.log(coordinat);
      }
    })
  }

  async function getCity() { 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinat.lat}&lon=${coordinat.lot}&appid=${api.key}`)
       const result = response.json()
       console.log((result));
       }
  

  const values = {
    city,
    setCity,
    coordinat,
    setCoordinat,
    handleSubmit,
  }
  
  return (
    <MainContext.Provider value={values}>{children}</MainContext.Provider>
    )
}

const useMainContext = () => useContext(MainContext);
export { MainProvider, useMainContext };


