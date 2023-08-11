import React from "react";
import "./WhiteNavbar.scss";
import { NavLink } from "react-router-dom";
/* can import images like css files in react */
import footballBadge from "../../assets/images/identity/football-badge.png";

const WhiteNavbar = () => {
  return (
    <div className="nav__container">
      {/* logo of the football team */}
      <div>
        {" "}
        <NavLink to="/">
          <img className="nav__badge" src={footballBadge} alt="badge" />
        </NavLink>
      </div>
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
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="latest" className="nav__link">
              Latest
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="#" className="nav__link">
              Events
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="#" className="nav__link">
              Newsletter
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="myclub" className="nav__link">
              My Club
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="#" className="nav__link">
              Tickets
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="#" className="nav__link">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default WhiteNavbar;
