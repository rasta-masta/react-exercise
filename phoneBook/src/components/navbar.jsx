import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (  
    
    <nav>
    <h1>PhoneBook App</h1>
    
    <div className="link">
    <Link to="/">Home</Link>
    <Link to="/add">Add-Contact</Link>
    </div>
    </nav>    
    
  );
}
 
export default Navbar;
  