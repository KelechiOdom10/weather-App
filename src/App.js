import React, { useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";

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
        <WeatherCard 
          key = {`${info.id}`}
          name = {info.name}
          country = {info.sys.country}
          date = {numToDate(info.dt)}
          time = {numToTime(info.dt)}
          temp = {roundUp(info.main.temp)}
          feelsLike = {roundUp(info.main.feels_like)}
          humidity = {info.main.humidity}
          icon = {`http://openweathermap.org/img/wn/${info.weather[0].icon}@4x.png`}
          description = {info.weather[0].description}
          wind = {info.wind.speed}
          sunrise = {numToTime(info.sys.sunrise)}
          sunset = {numToTime(info.sys.sunset)}
        />
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
