import React from "react";
import "./BlueNavbar.scss";
import { NavLink } from "react-router-dom";
/* For font awesome icons */
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
      {/* Shopping div */}
      <div className="blue-navbar__div">
        <NavLink to="#" className="blue-navbar__link">
          <FontAwesomeIcon
            className="blue-navbar__icon"
            icon={faCartShopping}
          ></FontAwesomeIcon>
          <span>Shop</span>
        </NavLink>
      </div>
      {/* Videos div */}
      <div className="blue-navbar__div">
        <NavLink to="#" className="blue-navbar__link">
          <FontAwesomeIcon
            className="blue-navbar__icon"
            icon={faCirclePlay}
          ></FontAwesomeIcon>
          <span>Videos</span>
        </NavLink>
      </div>
      {/* FAQ's div */}
      <div className="blue-navbar__div">
        <NavLink to="/faqs" className="blue-navbar__link">
          <FontAwesomeIcon
            className="blue-navbar__icon"
            icon={faQuestionCircle}
          ></FontAwesomeIcon>
          <span>FAQ's</span>
        </NavLink>
      </div>
      {/* Culture div */}
      <div className="blue-navbar__div">
        <NavLink to="/culture" className="blue-navbar__link">
          <FontAwesomeIcon
            className="blue-navbar__icon"
            icon={faEarthEurope}
          ></FontAwesomeIcon>
          <span>Culture</span>
        </NavLink>
      </div>
    </div>
  );
};

export default BlueNavbar;
