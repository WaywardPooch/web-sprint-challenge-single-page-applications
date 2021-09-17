// Import libraries
import React from "react";
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
            <button>Home</button>
            <button>Help</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Export component
export default NavHeader;
