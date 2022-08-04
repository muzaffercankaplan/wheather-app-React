import React from 'react'
import { MainProvider } from '../../Context/Context'



const CitySearch = () => {

    const {
        city,
        setCity,
        handleSubmit,
    } = MainProvider
console.log(city);
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={city}
                onChange={(e) => { setCity(e.target.value) }}
            />
        </form>
    )
}

export default CitySearch