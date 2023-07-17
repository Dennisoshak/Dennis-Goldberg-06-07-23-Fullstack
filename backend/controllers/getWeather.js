const axios = require("axios");
const mysql = require("mysql2");
require("dotenv").config();

const apiKey = process.env.API_KEY;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const pool = mysql.createPool({
  host: "localhost",
  user: user,
  password: password,
  database: "weather",
  port: 3306,
});

const saveWeatherToDatabase = (locationKey, temperature, conditions) => {
  const query =
    "INSERT INTO weather_data (city, temperature, conditions) VALUES (?, ?, ?)";

  pool.query(
    query,
    [locationKey, temperature, conditions],
    (error, results) => {
      if (error) {
        console.error(error);
        throw new Error();
      }
    }
  );
};

const getWeatherByCity = async (locationKey) => {
  try {
    const query = `SELECT temperature,conditions FROM weather_data WHERE city = ? `;
    const [rows] = await pool.promise().query(query, locationKey);

    if (rows.length > 0) {
      return rows[0];
    } else {
      const response = await axios.get(
        `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
      );

      const weatherData = response.data[0];
      const temperature = weatherData.Temperature?.Metric.Value;
      const conditions = weatherData.WeatherText;
      saveWeatherToDatabase(locationKey, temperature, conditions);
      return weatherData;
    }
  } catch (error) {
    console.error("Error fetching weather :", error);
  }
};

module.exports = {
  getWeatherByCity,
  saveWeatherToDatabase,
};
