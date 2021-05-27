import React from "react";

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
        <img src="/images/icon.jpg" alt="locate-icon" />
      </button>
    </div>
  );
}

export default Locate;
