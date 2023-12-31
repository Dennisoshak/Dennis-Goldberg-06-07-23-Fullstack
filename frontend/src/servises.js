import axios from "axios";

const baseURL = "http://localhost:8000/";

export const autoCompleteSearch = async (query) => {
  if (!query) return;
  try {
    const response = await axios.get(`${baseURL}autocomplete/${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getWeatherByCity = async (key) => {
  try {
    const response = await axios.get(`${baseURL}weather/${key}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const saveToFavorites = async (userId, cityName, cityKey) => {
  try {
    const response = await axios.post(`${baseURL}favorites/${userId}`, {
      cityName: cityName,
      cityKey: cityKey,
    });
    return response;
  } catch (error) {
    console.error("Error posting favorite city:", error);
  }
};
 
export const getFavoriteCities = async(userId) =>{
    try {
      const response = await axios.get(`${baseURL}favorites/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching favorites:', error);
      
    }
  }
export const deleteFavorite =async (userId,cityKey)=>{
  try {
    const response = await axios.delete(`${baseURL}favorites/${userId}/${cityKey}`)
    return response.data;
  } catch (error) {
    console.error('Error fetching favorites:', error);
    
  }
}
