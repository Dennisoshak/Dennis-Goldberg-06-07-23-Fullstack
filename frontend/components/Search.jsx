import React, { useState } from 'react';

const CitySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform the city search logic here
    // Replace this with your own implementation using an API or data source
    const results = searchCities(searchQuery);
    setSearchResults(results);
  };

  const searchCities = (query) => {
    // Replace this with your own implementation using an API or data source
    // For simplicity, we're using a static list of cities as an example
    const cities = [
      'New York',
      'Los Angeles',
      'London',
      'Paris',
      'Tokyo',
      'Sydney',
      'Berlin',
      'Rome',
    ];
    const filteredCities = cities.filter((city) =>
      city.toLowerCase().includes(query.toLowerCase())
    );
    return filteredCities;
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for a city..."
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySearch;