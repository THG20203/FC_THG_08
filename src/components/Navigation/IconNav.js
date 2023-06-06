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
      {/* Cart div */}
      <div className="icon-navbar__div icon-navbar__cart--div">
        <FontAwesomeIcon
          className="icon-navbar__icon"
          icon={faCartShopping}
        ></FontAwesomeIcon>
        <a href="#" class="icon-navbar__link">
          Cart (0)
        </a>
      </div>
      {/* FAQ's div */}
      <div className="icon-navbar__div icon-navbar__faqs--div">
        <FontAwesomeIcon
          className="icon-navbar__icon"
          icon={faQuestionCircle}
        ></FontAwesomeIcon>
        <a href="#" class="icon-navbar__link">
          FAQ's
        </a>
      </div>
      {/* Videos div */}
      <div className="icon-navbar__div icon-navbar__video--div">
        <FontAwesomeIcon
          className="icon-navbar__icon"
          icon={faCirclePlay}
        ></FontAwesomeIcon>
        <a href="#" class="icon-navbar__link">
          Videos
        </a>
      </div>
      {/* Users div */}
      <div className="icon-navbar__div icon-navbar__user--div">
        <FontAwesomeIcon
          className="icon-navbar__icon"
          icon={faUser}
        ></FontAwesomeIcon>
        <a href="#" class="icon-navbar__link">
          Sign Up / Login
        </a>
      </div>
    </div>
  );
};

export default IconNav;
