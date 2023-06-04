import React from "react";
import "./FirstNavbar.scss";
/* For font awesome icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faCartShopping,
  faHeart,
  faSearch,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

const FirstNavbar = () => {
  return (
    /* First Navbar section */
    /* Navbar container I've added in for background-color */
    <div className="first-nav__container">
      {/* Specifically first Navbar content -- links with favicons section */}
      <nav className="first-nav__content">
        <ul className="first-nav__list">
          <li className="first-nav__item">
            <a href="#" className="first-nav__link">
              <FontAwesomeIcon
                className="first-nav__icon"
                icon={faKey}
              ></FontAwesomeIcon>
              Log In
            </a>
          </li>
          <li className="first-nav__item">
            <i className="fa-solid fa-right-to-bracket"></i>
            <a href="#" className="first-nav__link">
              <FontAwesomeIcon
                className="first-nav__icon"
                icon={faCartShopping}
              ></FontAwesomeIcon>
              Cart
            </a>
          </li>
          <li className="first-nav__item">
            <a href="#" className="first-nav__link">
              <FontAwesomeIcon
                className="first-nav__icon"
                icon={faHeart}
              ></FontAwesomeIcon>
              Wish List
            </a>
          </li>
          <li className="first-nav__item">
            <a href="#" className="first-nav__link">
              <FontAwesomeIcon
                className="first-nav__icon"
                icon={faQuestion}
              ></FontAwesomeIcon>
              FAQ's
            </a>
          </li>
        </ul>
      </nav>
      {/* Search form section of first nav */}
      <div className="search">
        <form className="search__form">
          <input type="text" className="search__input" placeholder="Search" />
          <button className="search__btn">
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirstNavbar;
