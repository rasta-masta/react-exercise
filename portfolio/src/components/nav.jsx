import React from "react";
import { Link } from "react-router-dom"


const Navbar = () => {
  return (  
    <div className="nav">
      <Link to="/" className="home">HOME</Link>
      <Link to="/education">EDUCATION</Link>
      <div className="container">
        <button className="btn">EXPERIENCE</button>
        <div className="content-menu">
          <Link to="/agri">Agriculture Experience</Link>
          <Link to="/web-dev">Web-Dev Experience</Link>
        </div>
        </div>      
      <Link to="/contact">CONTACT ME</Link>
    </div>

  );
}
 
export default Navbar;
 