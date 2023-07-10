import axios from 'axios'

const baseURL =
"http://localhost:8000/";


export const autoCompleteSearch = async (query) => {
  if(!query) return
  try {
    
    const response = await axios.get(`${baseURL}autocomplete/${query}`)
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherByCity = async(key) => {
    try {
    
        const response = await axios.get(`${baseURL}weather/${key}`)
        console.log(response);
        return response.data;
      } catch (error) {
        console.log(error);
      }
}

export const saveToFavorites = async (userId, city) => {
  console.log("post")
  try {
    
    const response = await axios.post(`${baseURL}favorites`, {
      userId: userId,
      city: city
    });
    console.log('Favorite city posted successfully');
    return response
  } catch (error) {
    console.error('Error posting favorite city:', error);
  }
};
