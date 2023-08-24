import React from "react";
import "./LockSlider.scss";

function LockSlider() {
  let sliderStyle = {
    appearance: "none",
    width: "50rem",
    height: "10vh",
    cursor: "pointer",
  };

  return (
    <input type="range" className="lockSlider" style={sliderStyle}></input>
  );
}

export default LockSlider;
