import React, { useEffect, useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { autoCompleteSearch, getWeatherByCity } from "./servises";



const CitySearch = ({setWeather,setCity}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

 

  const handleInputChange = (event) => {
    const str = event.target.value;
    setSearchQuery(str);

   
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await autoCompleteSearch(searchQuery);
     setSearchResults(result)
    };
  
  fetchData()
  }, [searchQuery]);

  const handleCitySelection =async(key,cityName) => {
  const response = await getWeatherByCity(key)
 setWeather(response)
 setCity(cityName)
  }

  return (
    <div className="main">
      <div className="form">
        <FormControl
          width={"30%"}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <FormLabel>Search for a city</FormLabel>
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => handleInputChange(e)}
          />
        </FormControl>
      </div>
      <div className="list-container">
        <ul className="cities-list">
          {searchResults && searchResults.map((city, index) => (
            <li key={city.key} onClick={()=>handleCitySelection(city.Key,city.LocalizedName)}>{city.LocalizedName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CitySearch;
