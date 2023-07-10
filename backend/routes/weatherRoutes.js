const express = require("express");
const router = express.Router();
const { getWeatherByCity } = require("../controllers/getWeather");

router.post("/weather", (req, res) => {
  const { city, temperature, conditions } = req.body;
  const values = [city, temperature, conditions];

  const query = `INSERT INTO weather_data (city, temperature, condition) VALUES (${city}, ${temperature}, ${conditions})`;

  pool.query(query, values, (error) => {
    if (error) {
      console.error("Error saving weather data:", error);
      return res.status(500).json({ error: "Database error" });
    }

    res.status(200).json({ message: "Weather data saved successfully" });
  });
});

router.get("/:city", async (req, res) => {
  const { city } = req.params;

  const data = await getWeatherByCity(city);

  res.status(200).json(data);
});

module.exports = router;
