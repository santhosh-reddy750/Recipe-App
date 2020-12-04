import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
        <div className="vv">
       <nav className="na">
          <NavLink style={{color:"black"}}to="/">Home</NavLink>
          <NavLink style={{color:"black"}}to="/about">About</NavLink>
          <NavLink style={{color:"black"}}to="/App">Recipe</NavLink>
          <NavLink style={{color:"black"}}to="/contact">Contact</NavLink>
        
       </nav>
       </div>
    );
}
 
export default Navigation;
