import React, { useState } from "react";
import "./FAQ.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

/* introduced the activeIndex state variable using the useState hook to keep track of 
the active FAQ box. When a user clicks on a FAQ box, the toggleFaqBox function is 
called with the index of that box as an argument, and it toggles the active state by 
updating the activeIndex. */
/* Also conditionally apply the "active" class to the FAQ box based on whether its 
index matches the activeIndex state. Similarly, we show/hide the chevron and times 
icons based on the active state using the "hidden" class. */

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaqBox = (index) => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex === index ? null : index
    );
  };

  return (
    <section className="faq__section">
      <h1 className="faq__header heading-1--dark">
        Frequently Asked Questions
      </h1>

      <div className="faq-container">
        {/* FAQ question 1 */}
        <div
          className={`faq-box ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => toggleFaqBox(0)}
        >
          <h3 className="faq-box__title heading-3 mb-sm">
            Where can I buy a season ticket?
          </h3>
          <p className="faq-box__text paragraph-text">
            You can buy your 2023-24 season ticket online at . You will need to
            be registered on and be in possession of a membership card.
            Alternatively, you can go to the Stadium Office.
          </p>
          <button className="faq-toggle">
            <FontAwesomeIcon
              className={`faq-toggle__chevron-down ${
                activeIndex === 0 ? "hidden" : ""
              }`}
              icon={faChevronDown}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className={`faq-toggle__times ${
                activeIndex === 0 ? "" : "hidden"
              }`}
              icon={faTimes}
            ></FontAwesomeIcon>
          </button>
        </div>

        {/* FAQ question 2 */}
        <div
          className={`faq-box ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => toggleFaqBox(1)}
        >
          <h3 className="faq-box__title heading-3 mb-sm">
            What games are included in the season ticket?
          </h3>
          <p className="faq-box__text paragraph-text">
            The season ticket includes all home games in the 2023-24 league
            season.
          </p>
          <button className="faq-toggle">
            <FontAwesomeIcon
              className={`faq-toggle__chevron-down ${
                activeIndex === 1 ? "hidden" : ""
              }`}
              icon={faChevronDown}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className={`faq-toggle__times ${
                activeIndex === 1 ? "" : "hidden"
              }`}
              icon={faTimes}
            ></FontAwesomeIcon>
          </button>
        </div>

        {/* FAQ question 3 */}
        <div
          className={`faq-box ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => toggleFaqBox(2)}
        >
          <h3 className="faq-box__title heading-3 mb-sm">
            How do I sign up as a club member?
          </h3>
          <p className="faq-box__text paragraph-text">
            For information and how to purchase a club membership, please visit
            the sign-up page.
          </p>
          <button className="faq-toggle">
            <FontAwesomeIcon
              className={`faq-toggle__chevron-down ${
                activeIndex === 2 ? "hidden" : ""
              }`}
              icon={faChevronDown}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className={`faq-toggle__times ${
                activeIndex === 2 ? "" : "hidden"
              }`}
              icon={faTimes}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
