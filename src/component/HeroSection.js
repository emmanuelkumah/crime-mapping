import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero-image">
      <div className="hero-text">
        <h1>Creating A Safer Neighborhood</h1>
        <p>
          We empower citizens to report crimes anywhere in their locality and
          allow other users to easily look up crimes anywhere in Accra, Ghana's
          capital.
        </p>
        <Link to="/app">
          <button> View Map</button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
