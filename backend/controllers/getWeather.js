const axios = require("axios");
const mysql = require("mysql2");
// const apiKey = "q5F6SApntAgVmAyHDaQQdSSdOLzLNBFu"
// const apiKey ="	ZHwilvfWlb6H0E9AQIyQDosCiACHp2Up"
const apiKey = "	LnGOsntZjl9AAlSTXmOeNzN34GyLORNQ";
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "abc999666",
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

      console.log("Weather data saved to database");
    }
  );
};

const getWeatherByCity = async (locationKey) => {
  try {
    const query = `SELECT temperature,conditions FROM weather_data WHERE city = ? `;
    const { _rows } = pool.query(query, locationKey);

    if (_rows.length > 0) {
      console.log("Weather in the database:", _rows);
      return _rows[0];
    }

    const response = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
    );

    const weatherData = response.data[0];
    const temperature = weatherData.Temperature?.Metric.Value;
    const conditions = weatherData.WeatherText;
    saveWeatherToDatabase(locationKey, temperature, conditions);
    console.log("Weather data saved to database");
    return weatherData;
  } catch (error) {
    console.error("Error fetching weather :", error);
  }
};

module.exports = {
  getWeatherByCity,
  saveWeatherToDatabase,
};
