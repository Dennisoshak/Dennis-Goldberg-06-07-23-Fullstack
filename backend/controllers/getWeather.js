const axios = require("axios");
const {pool} = require('../db')

const saveWeatherToDatabase = (weatherData,locationKey) => {
  const conditions = weatherData.DataWeatherText
  const temperature = weatherData.Temperature.Metric.Value
  const query = `INSERT INTO weather_data (locationKey, temperature, condition) VALUES (${locationKey},${temperature},${conditions})`;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error establishing database connection:', err);
      throw err;
    }

    connection.query(query, [locationKey, city, temperature, condition], (error, results) => {
      connection.release();

      if (error) {
        console.error('Error saving weather data to database:', error);
        throw error;
      }

      console.log('Weather data saved to database');
    });
  });
};


const getWeatherbycity = async (locationKey) => {
  try {
    // const apiKey = "q5F6SApntAgVmAyHDaQQdSSdOLzLNBFu"
    const apiKey = "	ZHwilvfWlb6H0E9AQIyQDosCiACHp2Up"
 
    const response = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
    );

    const weatherData = response.data[0];

    saveWeatherToDatabase(weatherData,locationKey);

  } catch (error) {
    console.error("Error fetching  results:", error);
    throw new Error("Failed to fetch  results");
  }
};

module.exports = {
  getWeatherbycity,
  saveWeatherToDatabase
};