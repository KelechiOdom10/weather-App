import React, { useState } from "react";
import "./App.css";

const api ={
  key: '6891d905a6bf5f955acd5690c86652ec',
  base: 'http://api.openweathermap.org/data/2.5/'
}

function App() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  const handleChange = event => {
    setCityName(event.target.value)
  }

  const search = event => {
    if (event.key === "Enter") {
      fetch(
        `${api.base}weather?q=${cityName}&units=metric&APPID=${api.key}`
      )
      .then(response => response.json())
      .then(response => {
          setCityName('');
          setWeatherData([response]);
          console.log(response);
      })
    }  
  }

  const numToDate = (num) =>{
    return new Date(num *1000).toLocaleDateString();
  }

  const numToTime = (num) =>{
    return new Date(num * 1000).toLocaleTimeString();
  }
  
  const roundUp = (num) =>{
    return Math.ceil(num)
  }

  const weatherInfo = weatherData.map((info) => {
    return (
      <div key={`${info.id}`}>
        <h1>Name: {`${info.name}, ${info.sys.country}`}</h1>
        <p>Date: {numToDate(info.dt)}</p>
        <p>Time: {numToTime(info.dt)}</p>
        <h2>Main Temp: {info.main.temp}&deg;C</h2>
        <p>Feels like {roundUp(info.main.feels_like)}&deg;C</p>
        <p>Humidity: {info.main.humidity}%</p>
        <p><span><img src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`} alt='Weather icon' /></span>Weather Description: {info.weather[0].description}</p>
        <p>Wind: {info.wind.speed}m/s</p>
        <p>Sunrise: {numToTime(info.sys.sunrise)}</p>
        <p>Sunset: {numToTime(info.sys.sunset)}</p>
      </div>
    );
  })

  return (
    <div className="App">
        <input 
          type='text' 
          onChange={handleChange} 
          value={cityName} 
          onKeyPress={search}
        />
        <hr />
        {weatherInfo.length !== 0 ? <div>{weatherInfo}</div> : <p>Search in the input field to get weather</p> }
    </div>
  );
}

export default App;
