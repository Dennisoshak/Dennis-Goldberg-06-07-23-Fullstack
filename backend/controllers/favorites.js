const {pool} = require("../db");

const addFavoriteCity = (userId, city) => {
  const cityValue = JSON.stringify(city);
  const query = `INSERT INTO favorites (userId, city) VALUES (${userId}, ${cityValue})`;

  pool.query(query, [userId, cityValue], (error, results) => {
    if (error) {
      console.error("Error saving favorite city:", error);
      throw error;
    }

    console.log("Favorite city inserted successfully");
  });
};

module.exports = {
  addFavoriteCity,
};
