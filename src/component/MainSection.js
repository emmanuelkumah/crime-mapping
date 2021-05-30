import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { RiCriminalFill } from "react-icons/ri";

function MainSection() {
  return (
    <article className="article-container">
      <h2 className="article-heading">How It Works </h2>
      <div className="article-cards">
        <div className="article-card-item">
          <div className="article-card-title">
            <h2>
              <RiCriminalFill />
              Add Crime Scene
            </h2>
          </div>
          <p>
            Crime Hood allows users to click on a map to register the location a
            crime was committed. User is then prompted to enter the type of
            crime that was committed in the specified location.
          </p>
        </div>
        <div className="article-card-item">
          <div className="article-card-title">
            <h2>
              <FaSearchLocation />
              Search Places
            </h2>
          </div>

          <p>
            You can search for any location in Accra, and if a crime has been
            commited in that location, you will see a marker on the map
          </p>
        </div>
      </div>
    </article>
  );
}

export default MainSection;
