// Import libraries
import React from "react";
import { NavLink } from "react-router-dom";
// Import styles
import "./NavHeader.css";

// Create component
const NavHeader = () => {
  return (
    <header>
      <div className="header-content">
        <div className="navbar-left">
          <h2>Lambda Eats</h2>
        </div>
        <div className="navbar-right">
          <nav>
            <NavLink to={`/`}>
              <button>Home</button>
            </NavLink>
            <NavLink to={`/help`}>
              <button>Help</button>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Export component
export default NavHeader;
