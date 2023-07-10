import React from "react";
import { Link } from "react-router-dom";
import { Select } from "@chakra-ui/react";

const Header = ({setUser}) => {
  const users = [
    {name:"Dennis",user_id:1},
    {name:"John",user_id:2}
  ]
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
         {users.map((user)=>(
          <option onClick={()=>setUser(user)}>{user.name}</option>
         ))}
        </Select>
      </span>
    </div>
  );
};

export default Header;
