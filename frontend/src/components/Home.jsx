import React from "react";
import axios from "axios";
import { saveToFavorites } from "../servises";

const Home = ({ weather, city, user }) => {
  const temperature = weather.temperature || weather.Temperature?.Metric.Value;
  const conditions = weather.conditions || weather.WeatherText;
  const { Key, LocalizedName } = city;
  return (
    <>
      {LocalizedName && (
        <div className="weather-details">
          <span className="weather-item">{LocalizedName} </span>
          <span className="weather-item">{temperature}C</span>
          <span className="weather-item"> {conditions}</span>
          <button
            className="favorite-btn"
            onClick={() => saveToFavorites(user.user_id, LocalizedName, Key)}
          >
            ❤️️ add to favorites
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
