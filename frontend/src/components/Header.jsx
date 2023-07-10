import React from "react";
import { Link } from "react-router-dom";
import { Select } from "@chakra-ui/react";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="/favorites" className="nav-item">
        Favorites
      </Link>

      <span className="user-select">
        <Select placeholder="Select user" width="10rem">
          <option>Dennis</option>
          <option>John</option>
        </Select>
      </span>
    </div>
  );
};

export default Header;
