import React from 'react';
import './weather.css'

function Weather({data}) {
  return (
    <div className='weather'>
        <div className='top'>
            <span>
            <p className='city'>{data.city}</p>
            <p className='weather-descrp'>{data.weather[0].description}</p>
            </span>
            <img alt='weather' className='weather-icon' src={`weather-icons/${data.weather[0].icon}.png`}/>
        </div>
        <div className='bottom'>
            <p className='temperature'>{Math.round(data.main.temp)}°C</p> 
            <div className='details'>

                <div className='param-row'>
                    <span className='param-label'>Feels like</span>
                    <span className='param-value'>{Math.round(data.main.feels_like)}°</span>
                </div>

                <div className='param-row'>
                    <span className='param-label'>Wind</span>
                    <span className='param-value'>{data.wind.speed} MPH</span>
                </div>
                
                <div className='param-row'>
                    <span className='param-label'>Humidity</span>
                    <span className='param-value'>{data.main.humidity}%</span>
                </div>

                <div className='param-row'>
                    <span className='param-label'>Pressure</span>
                    <span className='param-value'>{data.main.pressure}HPA</span>
                </div>


            </div>
        </div>

    </div>
  )
}

export default Weather;
