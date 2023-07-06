import React from "react";
import "./BlueNavbar.scss";

const BlueNavbar = () => {
  //JSX code
  return (
    <div className="blue-navbar__container">
      <div className="blue-navbar__div blue-navbar__cart--div">
        <a href="#" class="blue-navbar__link">
          All events
        </a>
      </div>

      <div className="blue-navbar__div blue-navbar__faqs--div">
        <a href="#" class="blue-navbar__link">
          New Events
        </a>
      </div>

      <div className="blue-navbar__div blue-navbar__video--div">
        <a href="#" class="blue-navbar__link">
          FAQ's
        </a>
      </div>

      <div className="blue-navbar__div blue-navbar__user--div">
        <a href="#" class="blue-navbar__link">
          Videos
        </a>
      </div>

      <div className="blue-navbar__div blue-navbar__user--div">
        <a href="#" class="blue-navbar__link">
          Culture
        </a>
      </div>
    </div>
  );
};

export default BlueNavbar;
