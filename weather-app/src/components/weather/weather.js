import React from 'react';
import './weather.css'

function Weather({data}) {
  return (
    <div className='weather'>
        <div className='top'>
            <span>
            <p className='city'>New York</p>
            <p className='weather-descrp'>sunny</p>
            </span>
            <img alt='weather' className='weather-icon' src='weather-icons/sunny.png' />
        </div>
        <div className='bottom'>
            <p className='temperature'>14°C</p> 
            <div className='details'>
                <div className='param-row'>
                    <span className='param-label-top'>Details</span>
                </div>

                <div className='param-row'>
                    <span className='param-label'>Feels like</span>
                    <span className='param-value'>12°</span>
                </div>

                <div className='param-row'>
                    <span className='param-label'>Wind</span>
                    <span className='param-value'>10 MPH</span>
                </div>
                
                <div className='param-row'>
                    <span className='param-label'>Humidity</span>
                    <span className='param-value'>12%</span>
                </div>

                <div className='param-row'>
                    <span className='param-label'>Pressure</span>
                    <span className='param-value'>12 HPA</span>
                </div>


            </div>
        </div>

    </div>
  )
}

export default Weather;
