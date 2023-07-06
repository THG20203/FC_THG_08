import React from "react";
import "./BlueNavbar.scss";
import ExtraLinksNav from "./ExtraLinksNavigation/ExtraLinksNav";

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
      <ExtraLinksNav />
    </div>
  );
};

export default BlueNavbar;
