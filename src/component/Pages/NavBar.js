import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NavBar() {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="logo-container">
          <Link to="/" className="logo-text">
            <h2>
              <span className="logo-icon">
                <BsFillMicMuteFill />
              </span>
              CrimeHood
            </h2>
          </Link>
        </div>

        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
