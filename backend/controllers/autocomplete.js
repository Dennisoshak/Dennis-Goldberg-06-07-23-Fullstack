const axios = require("axios");

const autoCompleteSearch = async (query) => {
  try {
    const apiKey = "q5F6SApntAgVmAyHDaQQdSSdOLzLNBFu"
 
    const response = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`
    );

    const autocompleteResults = response.data;

    return autocompleteResults;
  } catch (error) {
    console.error("Error fetching  results:", error);
    throw new Error("Failed to fetch  results");
  }
};

module.exports = {
  autoCompleteSearch,
};
