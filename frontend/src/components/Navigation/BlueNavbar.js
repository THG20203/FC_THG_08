import React from "react";
import "./BlueNavbar.scss";
/* For font awesome icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faQuestionCircle,
  faCirclePlay,
  faEarthEurope,
} from "@fortawesome/free-solid-svg-icons";

const BlueNavbar = () => {
  return (
    <div className="blue-navbar__container">
      <FontAwesomeIcon
        className="blue-navbar__icon"
        icon={faQuestionCircle}
      ></FontAwesomeIcon>
      <a href="#" class="blue-navbar__link">
        FAQ's
      </a>
      <FontAwesomeIcon
        className="blue-navbar__icon"
        icon={faCirclePlay}
      ></FontAwesomeIcon>
      <a href="#" class="blue-navbar__link">
        Videos
      </a>
      <FontAwesomeIcon
        className="blue-navbar__icon"
        icon={faCartShopping}
      ></FontAwesomeIcon>
      <a href="#" class="blue-navbar__link">
        Shop
      </a>
      <FontAwesomeIcon
        className="blue-navbar__icon"
        icon={faEarthEurope}
      ></FontAwesomeIcon>
      <a href="#" class="blue-navbar__link">
        Culture
      </a>
    </div>
  );
};

export default BlueNavbar;
