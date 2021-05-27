import "./App.css";

import React, { useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import MapStyles from "./MapStyle";
import Modal from "./component/Modal";
import Search from "./component/Search";

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
  const [clickedMarker, setClickedMarker] = useState(null);

  // Help move where the map is
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  //pan and zoom map to cordinates
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

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
      {/* show the search component  */}
      <Search panTo={panTo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {/* display the markers on the map */}
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "/images/crime2.png",
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            onClick={() => setClickedMarker(marker)}
          />
        ))}
        {/* display info window on marker click */}
        {clickedMarker ? (
          <InfoWindow
            position={{ lat: clickedMarker.lat, lng: clickedMarker.lng }}
            onCloseClick={() => setClickedMarker(null)}
          >
            <div>
              <h2>
                Crime committed: <span>{clickedMarker.crime}</span>
              </h2>

              <h3>Occured {formatRelative(clickedMarker.time, new Date())}</h3>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default App;
