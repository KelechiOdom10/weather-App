import React from 'react';
import { WiStrongWind, WiHumidity, WiSunrise, WiSunset  } from "react-icons/wi"

function WeatherCard(props) {
    return(
        <div className='weatherCard'>
            <h1 className='mainHeader'>{`${props.name}, ${props.country}`}</h1>            
            <p>Date: {props.date} <span> | {props.time}</span></p>
            <div className='weather-wrapper'>
                <div className="weather-box">
                    <h2 className="temp">{props.temp}&deg;C
                    <span className="feelsLike"><p>Feels like {props.feelsLike}&deg;C</p></span>
                    </h2> 
                    <div className='weather-info'><img src={props.icon} alt='Weather icon' style={{width: '10vh'}} /><span><p>{props.description}</p></span> </div>   
                </div>
                <div className="weather-data">
                                
                    <p className='weather-info'><span><WiHumidity /></span> {props.humidity}%</p>
                    <p className='weather-info'><span><WiStrongWind /></span>{props.wind}m/s</p>
                    <p className='weather-info'><span><WiSunrise /></span> Sunrise: {props.sunrise}</p>
                    <p className='weather-info'><span><WiSunset/></span> Sunset: {props.sunset}</p>       
                </div>
            </div>
                    
            
            
      </div>
    )
}

export default WeatherCard;