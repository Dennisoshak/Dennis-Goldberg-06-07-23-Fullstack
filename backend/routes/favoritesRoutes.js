const express = require('express');
const router = express.Router();
const {addFavoriteCity} = require("../controllers/favorites")

router.get('/:userId', (req, res) => {
  const { userId ,city} = req.body;


  res.status(200).json({ userId, favorites });
});

router.post('/', (req, res) => {
  const { userId,city } = req.body;

  addFavoriteCity(userId,city)

  res.status(200).json({ message: 'Favorites saved successfully' });
});


router.delete('/:userId/:city', (req, res) => {
  const { userId, city } = req.params;


  res.status(200).json({ message: 'Favorite deleted successfully' });
});

module.exports = router;