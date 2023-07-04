import React from "react";
import "./BlueNav.scss";

const BlueNav = () => {
  //JSX code
  return (
    <div className="icon-navbar__container">
      <div className="icon-navbar__div icon-navbar__cart--div">
        <a href="#" class="icon-navbar__link">
          All events
        </a>
      </div>

      <div className="icon-navbar__div icon-navbar__faqs--div">
        <a href="#" class="icon-navbar__link">
          New Events
        </a>
      </div>

      <div className="icon-navbar__div icon-navbar__video--div">
        <a href="#" class="icon-navbar__link">
          FAQ's
        </a>
      </div>

      <div className="icon-navbar__div icon-navbar__user--div">
        <a href="#" class="icon-navbar__link">
          Videos
        </a>
      </div>
    </div>
  );
};

export default BlueNav;
