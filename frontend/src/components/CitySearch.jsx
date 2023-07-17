import React, { useEffect, useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { autoCompleteSearch, getWeatherByCity } from "../servises";

const CitySearch = ({ setWeather, setCity }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const str = event.target.value;

    setSearchQuery(str);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await autoCompleteSearch(searchQuery);
      setSearchResults(result);
    };

    fetchData();
  }, [searchQuery]);

  const handleCitySelection = async (key, cityData) => {
    const response = await getWeatherByCity(key);
    setWeather(response);
    setCity(cityData);
  };
  return (
    <div className="main">
      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <FormControl width={"30%"}>
            <FormLabel>Search for a city</FormLabel>
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
        </form>
      </div>
      <div className="list-container">
        <ul className="cities-list">
          {searchResults &&
            searchResults.map((city, index) => (
              <li
                key={city.key}
                onClick={() => handleCitySelection(city.Key, city)}
              >
                {city.LocalizedName}
                {", "}
                {city.Country.LocalizedName}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CitySearch;
