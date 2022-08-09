import React from 'react'
import { useMainContext } from '../../Context/Context'
import "../../App.css"


const CitySearch = () => {

    const {
        city,
        setCity,
        handleSubmit,
    } = useMainContext()

    return (
        <form className='form_container' onSubmit={handleSubmit}>
            <input
                className='input_area'
                placeholder='location'
                value={city}
                onChange={(e) => { setCity(e.target.value) }}
            />
        </form>
    )
}

export default CitySearch