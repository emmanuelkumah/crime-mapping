import React from "react";
import "./modal.css";

function Modal({ crimeInputText, setCrimeInputText, setCrime, setOpenModal }) {
  const handleFormInput = (event) => {
    event.preventDefault();
    setCrime(crimeInputText);
    setCrimeInputText("");
  };
  return (
    <div className="modal-container">
      <div className="modal-card">
        <div>
          <form onSubmit={handleFormInput}>
            <input
              type="text"
              value={crimeInputText}
              onChange={(event) => setCrimeInputText(event.target.value)}
            />
            <button>Submit</button>
          </form>
          <button onClick={() => setOpenModal(false)}>Close Modal</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
