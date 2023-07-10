import React from "react";
import axios from "axios";
import { saveToFavorites } from "./servises";

const Home = ({ weather, city, user }) => {
  console.log(weather);
  const temperature = weather.Temperature?.Metric.Value;
  const { key, LocalizedName } = city;

  return (
    <>
      {temperature && (
        <div className="weather-details">
          <span className="weather-item">{LocalizedName} </span>
          <span className="weather-item">{temperature}C</span>
          <span className="weather-item"> {weather.WeatherText}</span>
          <button onClick={() => saveToFavorites(user.user_id, city)}>
            <span className="heart">♥</span> add to favorites
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
