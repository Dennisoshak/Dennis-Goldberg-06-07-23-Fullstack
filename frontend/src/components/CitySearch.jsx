import React, { useEffect, useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";



const CitySearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cities, setCities] = useState([]);

  const baseURL =
  "http://localhost:8000/";


  const autoCompleteSearch = async () => {
    if (!searchQuery) return
    try {
      
      const response = await axios.get(`${baseURL}autocomplete/${searchQuery}`)
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const str = event.target.value;
    setSearchQuery(str);

   
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await autoCompleteSearch();
     setSearchResults(result)
    };
  
  fetchData()
    console.log(searchResults)
  }, [searchQuery]);

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
            <li key={city.key}>{city.LocalizedName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CitySearch;
