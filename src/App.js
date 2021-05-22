import "./App.css";

import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import MapStyles from "./MapStyle";
import Modal from "./component/Modal";

//place libraries
const libraries = ["places"];
//define the width and height of the map
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
//cordinates of the map to be loaded ie. Accra
const center = {
  lat: 5.603717,
  lng: -0.186964,
};
//map options
const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
function App() {
  const [markers, setMarkers] = useState([]);
<<<<<<< HEAD
  const [crime, setCrime] = useState("");
  const [hasCrime, setHasCrime] = useState(false);
  console.log(hasCrime);
=======
  const [openModal, setOpenModal] = useState(false);
  const [crimeInputText, setCrimeInputText] = useState("");
  const [crime, setCrime] = useState("");
  console.log(crime);
>>>>>>> feature/modal
  //load the google script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    libraries,
  });
  //check if script is loading
  if (loadError) {
    return "Error loading map";
  }
  if (!isLoaded) {
    return "Loading map";
  }

  // handle map click
  const handleMapClick = (event) => {
<<<<<<< HEAD
    //set has crime to true
    setHasCrime(true);
=======
    setOpenModal(true);
>>>>>>> feature/modal
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  };

  return (
    <div>
      {openModal ? (
        <Modal
          crimeInputText={crimeInputText}
          setCrimeInputText={setCrimeInputText}
          crime={crime}
          setCrime={setCrime}
          setOpenModal={setOpenModal}
        />
      ) : null}

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onClick={handleMapClick}
      >
        {/* display the markers on the map */}
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default App;
