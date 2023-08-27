import React, { useState } from "react";
import LockSlider from "./LockSlider.js";
import "./SlideToUnlock.scss";
import { AiFillUnlock } from "react-icons/ai";
import yearsBanner from "../../assets/images/banners/130-years-banner.png";

function SlideToUnlock() {
  /* useState for uiLockScreenProps pass in an object -> key value pairs. */
  const [uiLockScreenProps, setUiLockScreenProps] = useState({
    uiText: "Explore our History",
    uiBg: `url(${yearsBanner}) center/cover no-repeat`,
  });

  const [showLockSlider, setShowLockSlider] = useState(true);
  const [lockSliderValue, setLockSliderValue] = useState(0);

  const handleLockSliderInput = (event) => {
    // want to set the lockSliderValue to the target value
    setLockSliderValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div
      style={{ background: uiLockScreenProps.uiBg }}
      className="slide-unlock__container"
    >
      <h1 className="heading-1 slide-unlock__title">
        {uiLockScreenProps.uiText}
      </h1>
      {showLockSlider ? (
        <LockSlider
          width={"40vw"}
          /* handleInput a parameter into the LockSlider const on LockSlider.js */
          handleInput={handleLockSliderInput}
          /* look for the value is how far along the slider you are, event.target.value */
          value={lockSliderValue}
        />
      ) : (
        <AiFillUnlock className="slide-unlock__icon" />
      )}
    </div>
  );
}

export default SlideToUnlock;
