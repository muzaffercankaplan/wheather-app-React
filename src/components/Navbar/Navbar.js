import React from 'react'
import { centigrade, fahrenheit, github } from '../../assets';
import { useMainContext } from '../../Context/Context'

const Navbar = () => {

    const {
        loading,
        setLoading,
    } = useMainContext();

    return (
        <div className='navbar_container'>
            <div onClick={() => setLoading(!loading)}>
                <img className='c_or_f' src={loading ? centigrade : fahrenheit} alt="" /></div>
            <div>
                <a href='https://github.com/muzaffercankaplan/wheather-app-React'>
                    <img className='github' src={github} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Navbar