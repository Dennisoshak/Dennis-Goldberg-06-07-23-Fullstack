import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import CitySearch from "./components/CitySearch";
import Header from "./components/Header";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");
  const [user, setUser] = useState({ name: "Dennis", user_id: 1 });
  return (
    <BrowserRouter>
      <ChakraProvider>
        <div className="App">
          <Header setUser={setUser} />
          <CitySearch setWeather={setWeather} setCity={setCity} city={city} />

          <Routes>
            <Route
              path="/"
              element={
                <Home weather={weather} city={city} user={user} />
              }></Route>
            <Route
              path="/favorites"
              element={<Favorites user={user} />}></Route>
          </Routes>
        </div>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
