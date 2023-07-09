import React from "react";

const Home = ({weather,city}) => {
  console.log(weather)
  const temperature = weather.Temperature?.Metric.Value
  console.log(temperature)
  return <div className="weather-details">
    <span className="weather-item">{city} </span><span className="weather-item"> {weather.WeatherText}</span><span className="weather-item">{temperature}C</span><button>♥ add to favorites</button></div>
};

export default Home;
