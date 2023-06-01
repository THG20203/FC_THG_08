import React from "react";
import "./FirstNavbar.scss";
/* For font awesome icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const FirstNavbar = () => {
  return (
    /* First Navbar section */
    /* Navbar container I've added in for background-color */
    <div className="first-nav__container">
      {/* First Navbar content -- links with favicons section */}
      <nav className="first-nav__content">
        <ul className="first-nav__list">
          <li className="first-nav__item">
            <a href="#" className="first-nav__link">
              <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
              Sign Up / Log In
            </a>
          </li>
          <li className="first-nav__item">
            <i className="fa-solid fa-right-to-bracket"></i>
            <a href="#" className="first-nav__link">
              <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
              Cart
            </a>
          </li>
          <li className="first-nav__item">
            <a href="#" className="first-nav__link">
              Generate Password
            </a>
          </li>
          <li className="first-nav__item">
            <a href="#" className="first-nav__link">
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              Wish List
            </a>
          </li>
        </ul>
      </nav>
      {/* Search form section of first nav */}
      <div className="search">
        <form className="search__form">
          <input type="text" className="search__input" placeholder="Search" />
          <button className="search__btn">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirstNavbar;
