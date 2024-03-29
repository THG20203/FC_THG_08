import React from "react";
import "./BlueNavbar.scss";
import { NavLink } from "react-router-dom";
/* For font awesome icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faQuestionCircle,
  faHistory,
  faEarthEurope,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

const BlueNavbar = () => {
  return (
    <div className="blue-navbar__container">
      {/* Shopping div */}
      <div className="blue-navbar__div">
        <NavLink to="/shop" className="blue-navbar__link">
          <FontAwesomeIcon
            className="blue-navbar__icon"
            icon={faCartShopping}
          ></FontAwesomeIcon>
          <span>Shop</span>
        </NavLink>
      </div>
      {/* History div */}
      <div className="blue-navbar__div">
        <NavLink to="/history" className="blue-navbar__link">
          <FontAwesomeIcon
            className="blue-navbar__icon"
            icon={faHistory}
          ></FontAwesomeIcon>
          <span>History</span>
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
      {/* */}
      <div className="blue-navbar__div">
        <NavLink to="/gallery" className="blue-navbar__link">
          <FontAwesomeIcon
            className="blue-navbar__icon"
            icon={faCamera}
          ></FontAwesomeIcon>
          <span>Gallery</span>
        </NavLink>
      </div>
    </div>
  );
};

export default BlueNavbar;
