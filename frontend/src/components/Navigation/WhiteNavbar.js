import React, { useState } from "react";
import "./WhiteNavbar.scss";
import { NavLink } from "react-router-dom";
import footballBadge from "../../assets/images/identity/football-badge.png";

const WhiteNavbar = () => {
  /* Initially, isMenuOpen is set to false, indicating that the menu is closed. */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* handleMenuToggle is a function that toggles the state of isMenuOpen using the 
    logical NOT operator (!). */
  const handleMenuToggle = () => {
    /* If isMenuOpen is false, !isMenuOpen becomes true, indicating the menu should be open. 
    If isMenuOpen is true, !isMenuOpen becomes false, indicating the menu should be closed. */
    setIsMenuOpen(!isMenuOpen);
  };

  /* handleLinkClick is a function that explicitly sets isMenuOpen to false, which 
  means the menu should be closed. */
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    /* The nav__container div contains the entire navigation bar. 
    The "menu-open" class is conditionally added to it based on the value of isMenuOpen.
    If isMenuOpen is true, nothing is applied. If false, menu-open classes are applied. */
    <div className={`nav__container ${isMenuOpen ? "" : "menu-open"}`}>
      <div>
        <NavLink to="/" onClick={handleLinkClick}>
          <img className="nav__badge" src={footballBadge} alt="badge" />
        </NavLink>
      </div>
      <input
        /* An input of type "checkbox" represents the menu toggle. */
        type="checkbox"
        className="nav__checkbox"
        id="navi--toggle"
        /* Its checked state is controlled by isMenuOpen, and clicking 
        it triggers the handleMenuToggle function. */
        checked={isMenuOpen}
        onChange={handleMenuToggle}
      />
      <label htmlFor="navi--toggle" className="nav__button">
        <span className="nav__icon">&nbsp;</span>
      </label>
      {/* The nav__background div represents the background behind the menu toggle. 
      Clicking it also triggers the menu toggle. So can click anywhere on the background
      away from the links */}
      <div className="nav__background" onClick={handleMenuToggle}>
        &nbsp;
      </div>
      <nav className="nav__content">
        <ul className="nav__list">
          <li className="nav__item">
            {/* Clicking any navigation link triggers the handleLinkClick 
            function to close the menu. */}
            <NavLink to="/" className="nav__link" onClick={handleLinkClick}>
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="latest"
              className="nav__link"
              onClick={handleLinkClick}
            >
              Latest
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="myclub"
              className="nav__link"
              onClick={handleLinkClick}
            >
              My Club
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="#" className="nav__link" onClick={handleLinkClick}>
              Events
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="#" className="nav__link" onClick={handleLinkClick}>
              Newsletter
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="#" className="nav__link" onClick={handleLinkClick}>
              Tickets
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="#" className="nav__link" onClick={handleLinkClick}>
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default WhiteNavbar;

{
  /* import React from "react";
import "./WhiteNavbar.scss";
import { NavLink } from "react-router-dom";
/* can import images like css files in react 
import footballBadge from "../../assets/images/identity/football-badge.png"; */
}

{
  /* const WhiteNavbar = () => {
  return (
    <div className="nav__container">
       logo of the football team 
      <div>
        {" "}
        <NavLink to="/">
          <img className="nav__badge" src={footballBadge} alt="badge" />
        </NavLink>
      </div>
      {/* styled burger menu for smaller devices 
      <input type="checkbox" className="nav__checkbox" id="navi--toggle" />
      <label htmlFor="navi--toggle" className="nav__button">
        <span className="nav__icon">&nbsp;</span>
      </label>
      {/* background behind menu toggle 
      <div className="nav__background">&nbsp;</div>
      {/* Specificallly second nav content 
      <nav className="nav__content">
        {/* list of items to select in second navbar 
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
          {/* <li className="nav__item">
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

export default WhiteNavbar; */
}
