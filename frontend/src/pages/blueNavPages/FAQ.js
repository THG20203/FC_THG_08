import React, { useEffect } from "react";
import "./FAQ.scss";
/* For font awesome icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

const FaqPage = () => {
  /* Apply it in a useEffect with an empty dependency array. This will trigger the useEffect
  to rim once on load */
  /* JS outside of the component doesn't like tp run because React doesn't know about it. 
  So structure should be: React.useEffect(function to run, []) */
  useEffect(() => {
    /* parentNode is used to access the parent element of the clicked toggle element. 
  Parent of faq-toggle is faq-box -> has active applied styles */
    const toggles = document.querySelectorAll(".faq-toggle");

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
      });
    });

    return () => {
      /* Clean up & remove the events is good practice */
      toggles.forEach((toggle) => {
        toggle.removeEventListener("click", () => {
          toggle.parentNode.classList.toggle("active");
        });
      });
    };
  }, []);

  return (
    <section className="faq__section">
      <h1 className="faq__header heading-1--dark">
        Frequently Asked Questions
      </h1>

      {/* FAQ question 1 */}
      <div className="faq-container">
        <div className="faq-box active">
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
              className="faq-toggle__chevron-down"
              icon={faChevronDown}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="faq-toggle__times"
              icon={faTimes}
            ></FontAwesomeIcon>
          </button>
        </div>

        {/* FAQ question 2 */}
        <div className="faq-box">
          <h3 className="faq-box__title heading-3 mb-sm">
            What games are included in the season ticket?
          </h3>
          <p className="faq-box__text paragraph-text">
            The season ticket includes all home games in the 2023-24 league
            season.
          </p>
          <button className="faq-toggle">
            <FontAwesomeIcon
              className="faq-toggle__chevron-down"
              icon={faChevronDown}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="faq-toggle__times"
              icon={faTimes}
            ></FontAwesomeIcon>
          </button>
        </div>

        {/* FAQ question 3 */}
        <div className="faq-box">
          <h3 className="faq-box__title heading-3 mb-sm">
            How do I sign up as a club member?
          </h3>
          <p className="faq-box__text paragraph-text">
            For information and how to purchase a club membership, please visit
            the sign up page.
          </p>
          <button className="faq-toggle">
            <FontAwesomeIcon
              className="faq-toggle__chevron-down"
              icon={faChevronDown}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="faq-toggle__times"
              icon={faTimes}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
