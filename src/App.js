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

//access the places library from maps
const libraries = ["places"];
//define the width and height of the map
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
//get destination map(Accra) cordinates
const center = {
  lat: 5.603717,
  lng: -0.186964,
};
//add options to map
const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
function App() {
  //set map data
  const [markers, setMarkers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [mapDetails, setMapDetails] = useState({
    lat: "",
    lng: "",
    time: "",
    crime: "",
  });

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
  const onMapClick = (event) => {
    //get the cordinates of the area clicked
    setMapDetails({
      ...mapDetails,
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date(),
    });
    //define interval to show modal on map click
    setTimeout(modal, 2000);
  };
  //open modal to input crime
  const modal = () => {
    setOpenModal(true);
  };

  //get all details of  map
  const getMapDetails = (mapDetails) => {
    //update marker with map details
    setMarkers([...markers, mapDetails]);
  };
  console.log(markers);
  return (
    <div>
      {openModal ? (
        <Modal
          markers={markers}
          setMarkers={setMarkers}
          setOpenModal={setOpenModal}
          mapDetails={mapDetails}
          setMapDetails={setMapDetails}
          getMapDetails={getMapDetails}
        />
      ) : null}

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onClick={onMapClick}
      >
        {/* display the markers on the map */}
      </GoogleMap>
    </div>
  );
}

export default App;
