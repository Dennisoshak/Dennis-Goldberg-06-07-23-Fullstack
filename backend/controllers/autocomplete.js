const axios = require("axios");
require("dotenv").config();


const apiKey = process.env.API_KEY;
const autoCompleteSearch = async (query) => {
  try {
    const response = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`
    );

    return response.data;
  } catch (error) {
    console.error(error.response.data.Message);
  }
};

module.exports = {
  autoCompleteSearch,
};
