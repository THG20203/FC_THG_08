import React from "react";
import "./LockSlider.scss";

const LockSlider = ({ handleInput, sliderValue, width }) => {
  let sliderStyle = {
    appearance: "none",
    /* if no width 50rem, otherwise provide width value */
    width: !width ? "50vw" : width,
    height: "10vh",
    cursor: "pointer",
    borderRadius: "12px",
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
