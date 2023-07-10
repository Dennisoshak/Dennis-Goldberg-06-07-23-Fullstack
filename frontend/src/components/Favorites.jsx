import React from "react";

const Favorites = () => {
  const favorites = []
  const removeFromFavorites = () => {
    
  }
  return <div>
    {favorites && favorites.map((item,i)=>(
       <div className="weather-details">
       <span className="weather-item">{item.LocalizedName} </span>
       <span className="weather-item">{temperature}C</span>
       <span className="weather-item"> {weather.WeatherText}</span>
       <button onClick={removeFromFavorites}>
         <span className="heart">♥</span>Remove from favorites
       </button>
       </div>
      )
    )}
  </div>;
};

export default Favorites;
