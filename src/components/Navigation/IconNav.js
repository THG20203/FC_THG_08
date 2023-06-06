import React, { useState } from "react";
import "./IconNav.scss";
/* For font awesome icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faQuestionCircle,
  faCirclePlay,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const IconNav = () => {
  //JSX code
  return (
    <div className="icon-navbar__container">
      <FontAwesomeIcon
        className="icon-navbar__icon icon-navbar__icon--cart"
        icon={faCartShopping}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className="icon-navbar__icon icon-navbar__icon--question"
        icon={faQuestionCircle}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className="icon-navbar__icon icon-navbar__icon--player"
        icon={faCirclePlay}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className="icon-navbar__icon icon-navbar__icon--user"
        icon={faUser}
      ></FontAwesomeIcon>
    </div>
  );
};

export default IconNav;
