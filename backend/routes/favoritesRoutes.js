const express = require('express');
const router = express.Router();

router.get('/:userId', (req, res) => {
  const { userId } = req.params;

 

  res.status(200).json({ userId, favorites });
});

router.post('/:userId', (req, res) => {
  const { userId } = req.params;
  const { city } = req.body;


  res.status(200).json({ message: 'Favorites saved successfully' });
});


router.delete('/:userId/:city', (req, res) => {
  const { userId, city } = req.params;


  res.status(200).json({ message: 'Favorite deleted successfully' });
});

module.exports = router;