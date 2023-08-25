import React from "react";
import "./LockSlider.scss";

const LockSlider = ({ handleInput, sliderValue, width }) => {
  let sliderStyle = {
    appearance: "none",
    /* if no width 50rem, otherwise provide width value */
    width: !width ? "50rem" : width,
    height: "10vh",
    cursor: "pointer",
    background: "rgba(249, 247, 246, 0.5)",
    borderRadius: "12px",
  };

  return (
    <input
      type="range"
      className="lockSlider"
      style={sliderStyle}
      /* On input because when changing the slider we are changing a value */
      onInput={handleInput}
      /* Want a value to find out how far along the slider is */
      value={sliderValue}
    ></input>
  );
};

export default LockSlider;
