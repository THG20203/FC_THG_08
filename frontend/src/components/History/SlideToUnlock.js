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

  return (
    <div
      style={{ background: uiLockScreenProps.uiBg }}
      className="slide-unlock__container"
    >
      <h1 className="heading-1 slide-unlock__title">
        {uiLockScreenProps.uiText}
      </h1>
      {showLockSlider ? (
        <LockSlider width={"40vw"} />
      ) : (
        <AiFillUnlock className="slide-unlock__icon" />
      )}
    </div>
  );
}

export default SlideToUnlock;
