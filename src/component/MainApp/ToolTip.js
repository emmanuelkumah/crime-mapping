import React from "react";
import "./ToolTip.css";

function ToolTip() {
  return (
    <section>
      <div class="container">
        <div class="container__content">
          <p>Zoom and click to set the location the crime occured</p>
        </div>
        <div class="container__arrow" />
        <h4>Click here for help</h4>
      </div>
    </section>
  );
}

export default ToolTip;
