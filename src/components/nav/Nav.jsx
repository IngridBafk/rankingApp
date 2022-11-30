import React from "react";
import "./Nav.css";
import TextField from "@mui/material/TextField";
import logo from "../../assets/img/logo.svg";
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navBody">
      <img src={logo} alt="" />
      <div className="menuDesktop">
        <div className="linkDesktop">
      <NavLink className='linTres' to="/"><div class="linTres">Home</div></NavLink> 
      <NavLink className='linTres' to="/Rank"><div class="linTres"> Top 10 </div></NavLink>
      <NavLink className='linTres'to="/createapp"><div class="linTres">Create new </div></NavLink>
      <NavLink className='linTres' to="/About"><p class="linTres">About us</p></NavLink>
      </div>
      </div>
      <div className="menuBurger">
      <input type="checkbox" id="navi-toggle" class="checkbox" />
      <label for="navi-toggle" class="button">
        <span class="icon">&nbsp;</span>
      </label>
      <div class="background">&nbsp;</div>
      <nav class="nav">
        <ul class="list">
            <div className="search">
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search"/>
            </div>
          
          <li class="item">
            <NavLink to="/"><button class="link">Home</button></NavLink> 
          </li>
          <li class="item">
            <NavLink to="/Rank"><button class="link"> Top 10 </button></NavLink>
            
          </li>
          <li class="item">
            <NavLink to="/createapp"><button class="link">Create new </button></NavLink>
          </li>
          <li class="item">
            <NavLink to="/About"><p class="linkDos">About us</p></NavLink>
          </li>
        </ul>
      </nav>
     </div>
    </div>
  );
};

export default NavBar;
