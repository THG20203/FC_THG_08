import React, { useState } from "react";
import "./FAQ.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

/* const [activeIndex, setActiveIndex]: This line uses the useState hook to 
create a piece of state named activeIndex and a corresponding function 
setActiveIndex to update it. */
const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  /* toggleFaqBox is a function that takes an index parameter, which
  represents the index of the clicked FAQ box. */
  const toggleFaqBox = (index) => {
    /* This function uses the setActiveIndex function to update the 
    activeIndex state. */
    setActiveIndex((prevActiveIndex) =>
      /* If the clicked FAQ box is already active (i.e., prevActiveIndex === index), it 
    sets activeIndex to null, collapsing the box. */
      /* Why? Think about the functionality! -> if click on the white background of expanded box,
    it collapses. */
      /* If the clicked FAQ box is not active, it sets activeIndex to the clicked box's 
    index, expanding the box. */
      prevActiveIndex === index ? null : index
    );
  };

  return (
    <div className="faq__container">
      <section className="faq__section">
        <h1 className="faq__header heading-1--dark">
          Frequently Asked Questions
        </h1>

        <div className="faq-container">
          {/* FAQ question 1 */}
          <div
            /* activeIndex state is either 0 (indicating that the FAQ box at index 0 is active 
        or expanded) or null (indicating that no FAQ box is active or expanded). */
            /* 0 as an index in the code is arbitrary and not tied to an array 
        or any particular data structure. It's just used as a way to represent 
        the first FAQ box (or element) in this specific user interface. */
            className={`faq-box ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => toggleFaqBox(0)}
          >
            <h3 className="faq-box__title heading-3 mb-sm">
              Where can I buy a season ticket?
            </h3>
            <p className="faq-box__text paragraph-text">
              You can buy your season ticket online at . You will need to be
              registered on and be in possession of a membership card.
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
              The season ticket includes all home games in the next league
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
              For information and how to purchase a club membership, please
              visit the sign-up page.
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
    </div>
  );
};

export default FaqPage;
