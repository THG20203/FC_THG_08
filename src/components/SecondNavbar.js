import React from "react";
import "./SecondNavbar.scss";
/* can import images like css files in react */
import footballBadge from "../assets/images/identity/football-badge.png";

function SecondNavbar() {
  return (
    <div className="second-nav__container">
      {/* logo of the football team */}
      <img className="second-nav__badge" src={footballBadge} alt="badge" />
      {/* styled burger menu for smaller devices */}
      <input
        type="checkbox"
        className="second-nav__checkbox"
        id="navi-toggle"
      />
      <label for="navi-toggle" className="second-nav__button">
        <span className="second-nav__icon">&nbsp;</span>
      </label>
      {/* background behind menu toggle */}
      <div className="second-nav__background">&nbsp;</div>
      {/* Specific second nav */}
      <nav className="second-nav__content">
        {/* list of items to select in second navbar */}
        <ul className="second-nav__list">
          <li className="second-nav__item">
            <a href="#" className="second-nav__link">
              Latest
            </a>
          </li>
          <li className="second-nav__item">
            <a href="#" className="second-nav__link">
              Matches
            </a>
          </li>
          <li className="second-nav__item">
            <a href="#" className="second-nav__link">
              Stadium
            </a>
          </li>
          <li className="second-nav__item">
            <a href="#" className="second-nav__link">
              Culture
            </a>
          </li>
          <li className="second-nav__item">
            <a href="#" className="second-nav__link">
              Tickets
            </a>
          </li>
          <li className="second-nav__item">
            <a href="#" className="second-nav__link">
              Shop
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SecondNavbar;
