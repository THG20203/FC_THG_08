import React from "react";
import "./FAQ.scss";
/* For font awesome icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

const FaqPage = () => {
  return (
    <>
      <h1 className="faq__header heading-1">Frequently Asked Questions</h1>

      {/* FAQ question 1 */}
      <div className="faq__container">
        {/* whichever ones are active have a class of active */}
        <div className="faq-box active">
          <div className="fa-box__content">
            <h3 className="faq-box__title heading-3 mb-sm">
              Where can I buy a season ticket?
            </h3>
            <p className="faq-box__text paragraph-text">
              You can buy your 2023-24 season ticket online at . You will need
              to be registered on and be in possession of a membership card.
              Alternatively, you can go to the Stadium Office.
            </p>
            <button>
              <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>

      {/* FAQ question 2 */}
      <div className="faq__container">
        {/* whichever ones are active have a class of active */}
        <div className="faq-box active">
          <div className="fa-box__content">
            <h3 className="faq-box__title heading-3 mb-sm">
              What games are included in the season ticket?
            </h3>
            <p className="faq-box__text paragraph-text">
              The season ticket includes all home games in the 2023-24 league
              season.
            </p>
            <button>
              <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>

      {/* FAQ question 3 */}
      <div className="faq__container">
        {/* whichever ones are active have a class of active */}
        <div className="faq-box active">
          <div className="fa-box__content">
            <h3 className="faq-box__title heading-3 mb-sm">
              How do I sign up as a FC THG08 member?
            </h3>
            <p className="faq-box__text paragraph-text">
              For information and how to purchase a club membership, please
              visit the sign up page.
            </p>
            <button>
              <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
