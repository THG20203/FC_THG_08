import React from "react";
import "./LockSlider.scss";

function LockSlider() {
  let sliderStyle = {
    appearance: "none",
    width: "50rem",
    height: "10vh",
    cursor: "pointer",
    background: "rgba(249, 247, 246, 0.5)",
    borderRadius: "12px",
  };

  return (
    /* On input because when changing the slider we are changing a value */
    <input type="range" className="lockSlider" style={sliderStyle} onInput={}></input>
  );
}

export default LockSlider;
