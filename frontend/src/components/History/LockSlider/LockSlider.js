import React from "react";
import "./LockSlider.scss";

const LockSlider = ({ handleInput, sliderValue, width }) => {
  let sliderStyle = {
    appearance: "none",
    width: "40vw",
    height: "2vh",
    cursor: "pointer",
    borderRadius: "20px",
    background: "linear-gradient(to right, #0c22e8, #0a19a1)",
  };

  return (
    <input
      type="range"
      className="lock-slider"
      style={sliderStyle}
      /* On input because when changing the slider we are changing a value */
      onInput={handleInput}
      /* Want a value to find out how far along the slider is */
      value={sliderValue}
    ></input>
  );
};

export default LockSlider;
