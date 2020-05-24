import React from 'react';

function WeatherCard(props) {
    return(
        <div>
            <h1>Name: {`${props.name}, ${props.country}`}</h1>
            <p>Date: {props.date}</p>
            <p>Time: {props.time}</p>
            <h2>Main Temp: {props.temp}&deg;C</h2>
            <p>Feels like {props.feelsLike}&deg;C</p>
            <p>Humidity: {props.humidity}%</p>
            <p><span><img src={props.icon} alt='Weather icon' /></span>Weather Description: {props.description}</p>
            <p>Wind: {props.wind}m/s</p>
            <p>Sunrise: {props.sunrise}</p>
            <p>Sunset: {props.sunset}</p>
      </div>
    )
}

export default WeatherCard;