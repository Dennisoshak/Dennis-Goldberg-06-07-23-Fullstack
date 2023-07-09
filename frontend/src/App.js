import "./App.css";
import {
  Routes,
  Route,
  Navigate,
  Router,
  BrowserRouter,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import CitySearch from "./components/CitySearch";
import Header from "./components/Header";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");
  return (
    <BrowserRouter>
      <ChakraProvider>
        <div className="App">
          <Header />
          <CitySearch setWeather={setWeather} setCity={setCity} />

          <Routes>
            <Route
              path="/"
              element={<Home weather={weather} city={city} />}
            ></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
          </Routes>
        </div>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
