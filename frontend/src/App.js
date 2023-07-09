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

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <div className="App">
          <Header />
          <CitySearch />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
          </Routes>
        </div>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
