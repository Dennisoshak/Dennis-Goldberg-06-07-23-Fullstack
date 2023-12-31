const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
require("dotenv").config();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

const weatherRoutes = require("./routes/weatherRoutes");
const favoritesRoutes = require("./routes/favoritesRoutes");
const autocompleteRoutes = require("./routes/autocompleteRoutes");
const password = process.env.DB_PASSWORD;

app.use("/weather", weatherRoutes);
app.use("/favorites", favoritesRoutes);
app.use("/autocomplete", autocompleteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
