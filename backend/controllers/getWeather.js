const axios = require("axios");
// const { pool } = require("../db");
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "dennis",
  password: "Ella@2017",
  database: "weather",
  port:3306
});

const saveWeatherToDatabase = (locationKey, temperature, conditions) => {
  const query = 'INSERT INTO weather_data (city, temperature, conditions) VALUES (?, ?, ?)';

 

    pool.query(query, [locationKey, temperature, conditions], (error, results) => {

      if (error) {
        console.error("Error saving weather data to database:", error);
        throw error;
      }

      console.log("Weather data saved to database");
    });
  
};

const getWeatherByCity = async (locationKey) => {
  try {
    const apiKey = "q5F6SApntAgVmAyHDaQQdSSdOLzLNBFu"
    // const apiKey = "ZHwilvfWlb6H0E9AQIyQDosCiACHp2Up";

    const response = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
    );

    const weatherData = response.data[0];
    const temperature = weatherData.Temperature?.Metric.Value;
    const conditions = weatherData.WeatherText
    saveWeatherToDatabase(locationKey, temperature,conditions);
    return weatherData;
  } catch (error) {
    console.error("Error fetching  results:", error);
    throw new Error("Failed to fetch  results");
  }
};

module.exports = {
  getWeatherByCity,
  saveWeatherToDatabase,
};
