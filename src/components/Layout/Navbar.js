import React from "react";
import "./Navbar.scss";
/* can import images like css files in react */
import footballBadge from "../../assets/images/identity/football-badge.png";

const Navbar = () => {
  return (
    <div className="nav__container">
      {/* logo of the football team */}
      <img className="nav__badge" src={footballBadge} alt="badge" />
      {/* styled burger menu for smaller devices */}
      <input type="checkbox" className="nav__checkbox" id="navi--toggle" />
      <label htmlFor="navi--toggle" className="nav__button">
        <span className="nav__icon">&nbsp;</span>
      </label>
      {/* background behind menu toggle */}
      <div className="nav__background">&nbsp;</div>
      {/* Specificallly second nav content */}
      <nav className="nav__content">
        {/* list of items to select in second navbar */}
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Latest
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Matches
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Stadium
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Culture
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Tickets
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Shop
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
