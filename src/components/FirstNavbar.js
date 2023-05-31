import React from "react";
import "./FirstNavbar.scss";

function FirstNavbar() {
  return (
    /* First Navbar section */
    /* Navbar container I've added in for background-color */
    <div className="first-nav__container">
      {/* First Navbar content -- links with favicons section */}
      <nav className="first-nav__content">
        <ul className="first-nav__list">
          <li className="first-nav__item">
            <a href="#" className="first-nav__link">
              <i className="fa-solid fa-key"></i>Log In
            </a>
          </li>
          <li className="first-nav__item">
            <a href="#" className="first-nav__link">
              <i className="fa-solid fa-right-to-bracket"></i>Register
            </a>
          </li>
          <li className="first-nav__item">
            <a href="#" className="first-nav__link">
              <i className="fa-solid fa-shield-halved"></i>Generate Password
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
}

export default FirstNavbar;
