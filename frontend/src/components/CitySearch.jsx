import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const cities = [
  "Tel-Aviv",
  "Moscow",
  "London",
  "Berlin",
  "Kiev",
  "Boston",
  "bon",
];

const CitySearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchQuery(term);

    const results = cities.filter((city) =>
      city.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="main">
      <div className="form">
        <FormControl
          width={"30%"}
          onSubmit={(e) => {
            e.preventDefault();
          }}>
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
          {searchResults.map((result, index) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CitySearch;
