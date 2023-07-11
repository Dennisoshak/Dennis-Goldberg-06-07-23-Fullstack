import React from "react";
import { Link } from "react-router-dom";
import { Select } from "@chakra-ui/react";

const Header = ({setUser}) => {
  const users = [
    {name:"Dennis",user_id:1},
    {name:"John",user_id:2},
    {name:"Jane",user_id:3}
  ]
  const handleClick = (e) => {
    
    setUser(()=>users[e.target.value])
  }
  return (
    <div className="header">
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="/favorites" className="nav-item">
        Favorites
      </Link>

      <span className="user-select">
        <Select  width="10rem" onChange={(e)=>{handleClick(e)}}>
          <option selected disabled>Select User</option>
         {users.map((user,i)=>(
          <option onClick={()=>handleClick(user)}value={i}>{user.name}</option>
         ))}
        </Select>
      </span>
    </div>
  );
};

export default Header;
