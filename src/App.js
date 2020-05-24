import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const apiKey = '6891d905a6bf5f955acd5690c86652ec';
  const [cityName, setCityName] = useState('London')
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`,
    )
    .then(response => response.json())
    .then(response => {
        console.log(response)
        setWeatherData([response])
    })
      .catch((err) => {
        console.log(err);
      });
  }, [cityName]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
