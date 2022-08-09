import axios from "axios";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const MainContext = createContext();


const MainProvider = ({ children }) => {

    const Api = {
        key: process.env.REACT_APP_WEATHER_API_KEY
    }

    const [loading, setLoading] = useState(true)
    const [city, setCity] = useState("")
    const [search, setSearch] = useState("aydın")
    const [data, setData] = useState({
        daily: "",
        time: "",
    })

    const [day, setDay] = useState(
        {
            weather: "",
            main: "",
            wind: "",
            name: "",
            day: "",
            country: "",
            icon: "",
            dt: "",
        }
    )

    const [coordinat, setCoordinat] = useState({
        lat: 37.75,
        lot: 28,
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(city)
        setCity("")

    }



    const getCity = useCallback(async (city, loading) => {
        await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api.key}&units=${loading ? "imperial" : "metric"}`)
            .then((res) => {
                const result = res.data
                setCoordinat({
                    lat: result.coord.lat,
                    lot: result.coord.lon,
                })
                setDay({
                    weather: result.weather[0].description,
                    main: result.main,
                    wind: result.wind,
                    name: result.name,
                    country: result.sys.country,
                    icon: result.weather[0].icon,
                    dt: result.dt,
                })
            })
    }, [Api.key])

    useEffect(() => { getCity(search, loading) }, [getCity, search, loading])

    const getWeather = useCallback(async (lat, lot, loading) => {
        await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lot}&exclude=current,minutely,hourly,alerts&appid=${Api.key}&units=${loading ? "imperial" : "metric"}`)
            .then((res) => {
                const result = res.data
                setData({
                    daily: result.daily,
                    time: result.timezone
                })
            })
    }, [Api.key])



    useEffect(() => { getWeather(coordinat.lat, coordinat.lot, loading) }, [getWeather, coordinat.lat, coordinat.lot, loading])


    const values = {
        city,
        setCity,
        data,
        setData,
        handleSubmit,
        loading,
        setLoading,
        day,
    }

    return (
        <MainContext.Provider value={values}>{children}</MainContext.Provider>
    )
}

const useMainContext = () => useContext(MainContext);
export { MainProvider, useMainContext };