import React, { useState, useEffect } from "react";
import LockSlider from "./LockSlider.js";
import "./SlideToUnlock.scss";
import { AiFillUnlock } from "react-icons/ai";
import yearsBanner from "../../../assets/images/banners/130-years-banner.png";

function SlideToUnlock() {
  /* useState for uiLockScreenProps pass in an object -> key value pairs. */
  const [uiLockScreenProps, setUiLockScreenProps] = useState({
    uiText: "Explore our History",
    uiBg: `url(${yearsBanner}) center/cover no-repeat`,
  });

  /* initial state should be to show the lock slider */
  const [showLockSlider, setShowLockSlider] = useState(true);
  /* the inital state of lockSlider should be 0. If set at 50 the toggle would be halfway across the page */
  const [lockSliderValue, setLockSliderValue] = useState(0);

  const handleLockSliderInput = (event) => {
    // want to set the lockSliderValue to the target value
    setLockSliderValue(event.target.value);
  };

  /* what we want to see when the screen is locked */
  const lockScreen = () => {
    setLockSliderValue(0);
    setShowLockSlider(true);
    setUiLockScreenProps({
      uiText: "Explore our History",
      uiBg: `url(${yearsBanner}) center/cover no-repeat`,
    });
  };

  /* when the screen is unlocked */
  useEffect(() => {
    /* check if the screen is locked */
    if (lockSliderValue === "100") {
      setShowLockSlider(false);
      setUiLockScreenProps({
        uiText: "We have 130 years of passion and pride",
        uiBg: `#f9f7f6`,
      });
    }
  });

  return (
    <div
      style={{ background: uiLockScreenProps.uiBg }}
      className="slide-unlock__container"
    >
      <h1 className="heading-1--dark slide-unlock__title">
        {uiLockScreenProps.uiText}
      </h1>
      {showLockSlider ? (
        <LockSlider
          /* handleInput a parameter into the LockSlider const on LockSlider.js */
          handleInput={handleLockSliderInput}
          /* look for the value is how far along the slider you are */
          value={lockSliderValue}
        />
      ) : (
        /* If you click on the lock icon, it'll lock the screen with onClick function. */
        <AiFillUnlock className="slide-unlock__icon" onClick={lockScreen} />
      )}
    </div>
  );
}

export default SlideToUnlock;
