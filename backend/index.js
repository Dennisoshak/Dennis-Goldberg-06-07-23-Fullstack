const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 8000;


const pool = mysql.createPool({
    host: 'localhost:3306',
    user: 'dennis',
    password: 'Ella@2017',
    database: 'weather',
  });

app.use(cors({
    origin: 'http://localhost:3000',
  }));

app.use(express.json());

const weatherRoutes = require('./routes/weatherRoutes');
const favoritesRoutes = require('./routes/favoritesRoutes');
const autocompleteRoutes = require('./routes/autocompleteRoutes')

app.use('/weather', weatherRoutes);
app.use('/favorites', favoritesRoutes);
app.use('/autocomplete', autocompleteRoutes);





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});