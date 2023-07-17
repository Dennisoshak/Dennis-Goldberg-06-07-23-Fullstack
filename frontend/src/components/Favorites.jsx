import React, { useEffect, useState } from "react";
import { deleteFavorite, getFavoriteCities } from "../servises";

const Favorites = ({ user }) => {
  const [favorites, setFavorites] = useState([]);

  const removeFromFavorites = async (cityKey) => {
    const response = await deleteFavorite(user.user_id, cityKey);
    const temp = favorites.filter((city) => city.cityKey !== cityKey);
    setFavorites(temp);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFavoriteCities(user.user_id);

      setFavorites(data);
    };
    fetchData();
  }, [user]);

  return (
    <div>
      {favorites[0]?(
        <>
         <h1 className="favories-heading">{user.name}'s favorites:</h1>
      {favorites[0] &&
        favorites.map((item, i) => (
          <div key={item.cityKey} className="weather-details">
            <span className="weather-item">{item.LocalizedName} </span>
            <span className="weather-item"> {item.cityName}</span>
            <button
              onClick={() => removeFromFavorites(item.cityKey)}
              className="favorite-btn"
            >
              ❤️️ Remove from favorites
            </button>
          </div>
        ))}
        </>
      ):(
        <>
        <h1 className="favories-heading">{user.name} doesn't have favorite cities</h1>
        </>
      )}
     
    </div>
  );
};

export default Favorites;
