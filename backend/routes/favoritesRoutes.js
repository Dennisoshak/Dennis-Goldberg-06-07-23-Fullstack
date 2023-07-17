const express = require("express");
const router = express.Router();
const {
  addFavoriteCity,
  getFavoriteCities,
  deleteFavorite,
} = require("../controllers/favorites");

router.post("/:userId", (req, res) => {
  try {
    const { cityName, cityKey } = req.body;
    const { userId } = req.params;

   const result =  addFavoriteCity(userId, cityName, cityKey);
    res.status(200).json({ message: "Favorites saved successfully" });
  } catch (error) {
    console.error("Failed to save favorites", error);
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const favorites = await getFavoriteCities(userId);
    res.status(200).json(favorites);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/:userId/:cityKey", async (req, res) => {
  try {
    const { userId, cityKey } = req.params;
    const result = await deleteFavorite(userId, cityKey);
    res.status(200).json(result);
  } catch (error) {
    console.error("Failed to delete", error);
  }
});

module.exports = router;
