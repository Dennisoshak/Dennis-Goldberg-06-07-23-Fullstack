import React from "react";
import axios from "axios";

const Home = ({ weather, city }) => {
  console.log(weather);
  const temperature = weather.Temperature?.Metric.Value;
  const { key, LocalizedName } = city;
  const saveToFavorites = async () => {
    try {
      await axios.post("/favorite-city", { key, LocalizedName });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="weather-details">
      <span className="weather-item">{city.LocalizedName} </span>
      <span className="weather-item">{temperature}C</span>
      <span className="weather-item"> {weather.WeatherText}</span>
      <button onClick={saveToFavorites}>
        <span className="heart">♥</span> add to favorites
      </button>
    </div>
  );
};

export default Home;
