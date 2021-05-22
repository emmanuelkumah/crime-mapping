import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import "./modal.css";

function Modal({ crimeInputText, setCrimeInputText, setCrime, setOpenModal }) {
  const handleFormInput = (event) => {
    event.preventDefault();
    setCrime(crimeInputText);
    setCrimeInputText("");
  };
  return (
    <div className="modal-container">
      <section className="modal-card">
        <div className="modalClose-icon">
          <AiFillCloseSquare onClick={() => setOpenModal(false)} />
        </div>
        <form onSubmit={handleFormInput}>
          <h2>What Crime Was Committed Here?</h2>
          <div className="modal-input">
            <input
              type="text"
              autoFocus
              value={crimeInputText}
              onChange={(event) => setCrimeInputText(event.target.value)}
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
