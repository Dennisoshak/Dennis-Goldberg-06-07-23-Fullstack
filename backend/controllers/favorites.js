const mysql = require("mysql2");
require("dotenv").config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const pool = mysql.createPool({
  host: "localhost",
  user: user,
  password: password,
  database: "weather",
  port: 3306,
});

const addFavoriteCity = async (userId, cityName, cityKey) => {
  const checkQuery = `SELECT * FROM favorites WHERE user_id = ? AND cityKey = ?`;
  const insertQuery = `INSERT INTO favorites (user_id, cityName, cityKey) VALUES (?, ?, ?)`;

  pool.query(checkQuery, [userId, cityKey], (error, results) => {
    if (error) {
      console.error("Error checking favorite city:", error);
      return;
    }

    if (results.length > 0) {
      return "City already exists in favorites";
    }

    pool.query(insertQuery, [userId, cityName, cityKey], (error, results) => {
      if (error) {
        console.error("Error saving favorite city:", error);
        return;
      }
      return "Favorite city saved";
    });
  });
};

const getFavoriteCities = async (userId) => {
  try {
    const query = "SELECT cityName, cityKey FROM favorites WHERE user_id = ?";
    const [rows] = await pool.promise().query(query, [userId]);
    return rows;
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return [];
  }
};

const deleteFavorite = async (userId, cityKey) => {
  try {
    const query = "DELETE FROM favorites WHERE user_id = ? AND cityKey = ?";
    const [result] = await pool.promise().query(query, [userId, cityKey]);
    return result.affectedRows;
  } catch (error) {
    console.error("Error deleting favorite:", error);
    return [];
  }
};

module.exports = {
  addFavoriteCity,
  getFavoriteCities,
  deleteFavorite,
};
