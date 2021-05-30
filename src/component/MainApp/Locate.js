import React from "react";
import locateIcon from "../../images/icon.jpg";

function Locate({ panTo }) {
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => null
    );
  };
  return (
    <div className="locate">
      <button onClick={getLocation}>
        <img src={locateIcon} alt="locate-icon" />
      </button>
    </div>
  );
}

export default Locate;
