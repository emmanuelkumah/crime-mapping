import React from "react";
import { BiMapPin } from "react-icons/bi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NavBar() {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="logo-container">
          <Link to="/" className="logo-text">
            <h2>
              <span className="logo-icon">
                <BiMapPin />
              </span>
              CrimeHood
            </h2>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
