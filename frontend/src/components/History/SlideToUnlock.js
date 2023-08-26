import React, { useState } from "react";
import LockSlider from "./LockSlider.js";
import "./SlideToUnlock.scss";
import { AiFillUnlock } from "react-icons/ai";

//const [showLockSlider, setShowLockSlider] = useState(0);

function SlideToUnlock() {
  return (
    <div className="slide-unlock__container">
      <h1 className="heading-1 slide-unlock__title">History</h1>
      <LockSlider width={"40vw"} />
      <AiFillUnlock className="slide-unlock__icon" />
    </div>
  );
}

export default SlideToUnlock;
