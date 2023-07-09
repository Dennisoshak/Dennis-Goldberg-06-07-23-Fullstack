import axios from 'axios'

const baseURL =
"http://localhost:8000/";


export const autoCompleteSearch = async (query) => {
  if(!query) return
  try {
    
    const response = await axios.get(`${baseURL}autocomplete/${query}`)
    console.log(response);
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