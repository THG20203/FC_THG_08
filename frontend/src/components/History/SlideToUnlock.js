import React from "react";
import LockSlider from "./LockSlider.js";
import "./SlideToUnlock.scss";

function SlideToUnlock() {
  return (
    <div className="slide-unlock__container">
      <LockSlider width={"40vw"} />
    </div>
  );
}

export default SlideToUnlock;
