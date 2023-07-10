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
import { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");
  const [user,setUser] = useState({})
  return (
    <BrowserRouter>
      <ChakraProvider>
        <div className="App">
          <Header setUser={setUser}/>
          <CitySearch setWeather={setWeather} setCity={setCity} />

          <Routes>
            <Route
              path="/"
              element={<Home weather={weather} city={city} user={user} />}
            ></Route>
            <Route path="/favorites" element={<Favorites user={user}/>}></Route>
          </Routes>
        </div>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
