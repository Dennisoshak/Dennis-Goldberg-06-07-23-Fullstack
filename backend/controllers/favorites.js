const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "abc999666",
  database: "weather",
  port: 3306,
});

const addFavoriteCity = (userId, cityName, cityKey) => {
  const query = `INSERT INTO favorites (user_id, cityName,cityKey) VALUES (?, ?,?)`;

  pool.query(query, [userId, cityName, cityKey], (error, results) => {
    if (error) {
      console.error("Error saving favorite city:", error);
      throw error;
    }

    console.log("Favorite city inserted successfully");
  });
};

const getFavoriteCities = async (userId) => {
  try {
    const query = "SELECT * FROM favorites WHERE userId = ?";
    const [favorites, _] = pool.query(query, [userId]);
    console.log("Favorites fetched successfully");
    return favorites;
  } catch (error) {
    console.error("Failed to fetch favorites:", error);
    res.status(500).json({ error: "Failed to fetch favorites" });
  }
};

module.exports = {
  addFavoriteCity,
  getFavoriteCities,
};
