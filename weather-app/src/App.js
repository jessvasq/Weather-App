import './App.css';
import Search from './components/search/search';
import Weather from './components/weather/weather';
import Forecast from './components/forecast/forecast';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';

function App() {
  //useState
  const [currenWeather, setCurrentWeather ] = useState(null);
  const [forecast, setForecast ] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split('')

    //fetch current-weather
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);  //add celsius units

    //fetch 3-hour forecast
    const forecastFetch = fetch(`${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    //promise -- used to handle async functions like making network requests, fetching data, etc
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async(response) => {
          const weatherResponse = await response[0].json();
          const forecastResponse = await response[1].json();

          setCurrentWeather({ city: searchData.label, ...weatherResponse})
          setForecast({ city: searchData.label, ...forecastResponse})
      })
      .catch((err) => console.log(err))
  }

  console.log(currenWeather)
  // console.log(forecast)

  return (
    <div className="container">
      <h1>WEATHER</h1>
     <Search onSearchChange={handleOnSearchChange}/>
     {/*if data doesn't exist, don't display anything*/}
    {currenWeather && <Weather data={currenWeather} />}
    {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
