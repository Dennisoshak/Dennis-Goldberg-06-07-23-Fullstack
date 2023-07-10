const axios = require("axios");

const autoCompleteSearch = async (query) => {
  try {
    // const apiKey = "q5F6SApntAgVmAyHDaQQdSSdOLzLNBFu"
    // const apiKey ="	ZHwilvfWlb6H0E9AQIyQDosCiACHp2Up"
    const apiKey ="	LnGOsntZjl9AAlSTXmOeNzN34GyLORNQ"
 
    const response = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`
    );

   return response.data;

  } catch (error) {
    console.error( error.response.data.Message);
    
  }
};

module.exports = {
  autoCompleteSearch,
};
