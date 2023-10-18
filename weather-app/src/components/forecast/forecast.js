import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import './forecast.css'

//array of days 
const week_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


function Forecast({data}) {
    const dayInWeek = new Date().getDay();
    //use slice so we can display the forecast
    const forecast_days = week_days.slice(dayInWeek, week_days.length).concat(week_days.slice(0, dayInWeek));

    // console.log(forecast_days)

    return (
  <>
    <label className='title'>7-DAY FORECAST</label>
    <Accordion allowZeroExpanded>  
        {/* loop to get the data */}
      
            {data.list.slice(0,7).map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className='daily-item'>
                                <img alt='weather' className='icon-small' src={`weather-icons/${item.weather[0].icon}.png`}/>

                                <label className='day'>{forecast_days[index]}</label>
                                <label className='description'>{item.weather[0].description}</label>
                                <label className='minTemp-maxTemp'>{Math.round(item.main.temp_min)} °C / {" "} {Math.round(item.main.temp_max)}°C</label> 

                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    {/* PANEL: will expand to show more details e.g. wind, pressure */}
                    <AccordionItemPanel>
                        <div className='daily-grid'>
                            <div className='inner-daily-grid'>
                                <label> Pressure </label>
                                <label> {item.main.pressure} HPA </label>
                            </div>

                            <div className='inner-daily-grid'>
                                <label> Humidity </label>
                                <label> {item.main.humidity} % </label>
                            </div>

                            <div className='inner-daily-grid'>
                                <label> Clouds </label>
                                <label> {item.clouds.all} % </label>
                            </div>

                            <div className='inner-daily-grid'>
                                <label> Wind Speed </label>
                                <label> {item.wind.speed} MPH </label>
                            </div>

                            <div className='inner-daily-grid'>
                                <label> Sea Level </label>
                                <label> {item.main.sea_level} M </label>
                            </div>

                            <div className='inner-daily-grid'>
                                <label> Feels like: </label>
                                <label> {Math.round(item.main.feels_like)}°C </label>
                            </div>

                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        
    </Accordion>

  </>
  );
};

export default Forecast;
