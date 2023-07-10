const express = require("express");
const router = express.Router();
const {
  addFavoriteCity,
  getFavoriteCities,
} = require("../controllers/favorites");

router.get("/:userId", (req, res) => {
  const { userId, city } = req.body;

  res.status(200).json({ userId, favorites });
});

router.post("/:userId", (req, res) => {
  const { cityName, cityKey } = req.body;
  const { userId } = req.params;

  addFavoriteCity(userId, cityName, cityKey);

  res.status(200).json({ message: "Favorites saved successfully" });
});

router.delete("/:userId/:city", (req, res) => {
  const { userId, city } = req.params;

  res.status(200).json({ message: "Favorite deleted successfully" });
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const favorites = getFavoriteCities(userId);
  res.status(200).json(favorites);
});

module.exports = router;
