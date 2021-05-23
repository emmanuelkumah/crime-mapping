import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import "./modal.css";

function Modal({ setOpenModal, mapDetails, setMapDetails, getMapDetails }) {
  //get the value of the input
  const handleCrimeInput = (event) => {
    //update the value of the crime
    setMapDetails({
      ...mapDetails,
      crime: event.target.value,
    });
    //reset input details
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    //reset the input field
    if (mapDetails.crime.trim()) {
      //pass the map details to the getMapDetails function
      getMapDetails(mapDetails);
      //reset the input field
      setMapDetails({
        ...mapDetails,
        crime: "",
      });
    }
  };

  return (
    <div className="modal-container">
      <section className="modal-card">
        <div className="modalClose-icon">
          <AiFillCloseSquare onClick={() => setOpenModal(false)} />
        </div>
        <form onSubmit={handleFormSubmit}>
          <h2>What Crime Was Committed Here?</h2>
          <div className="modal-input">
            <input
              type="text"
              placeholder="Please enter the type of crime"
              value={mapDetails.crime}
              onChange={handleCrimeInput}
            />
            <button className="submit-btn">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Modal;
