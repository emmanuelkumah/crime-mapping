import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import "./modal.css";

function Modal({
  crimeInputText,
  setCrimeInputText,
  crime,
  setCrime,
  markers,
  setMarkers,
  setOpenModal,
}) {
  //get the value of the input
  const handleCrimeInput = (event) => {
    setMarkers([{ ...markers, offense: event.target.value }]);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    //clear input field
    // setCrime({ ...crime, offense: "" });
    console.log(markers);
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
              autoFocus
              value={crime.offense}
              onChange={handleCrimeInput}
              placeholder="Please enter the type of crime"
            />
            <button className="submit-btn">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Modal;
