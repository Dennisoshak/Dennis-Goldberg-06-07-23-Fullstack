const express = require('express');
const router = express.Router();
const { autoCompleteSearch } = require('../controllers/autocomplete');

router.get('/autocomplete/:query', async (req, res) => {
  const { query } = req.params;
console.log(query)
  try {
    const autocompleteResults = await autoCompleteSearch(query);

    res.status(200).json(autocompleteResults);
  } catch (error) {
    console.error('Error during search:', error);
    res.status(500).json({ error: 'Failed to fetch results' });
  }
});

module.exports = router;