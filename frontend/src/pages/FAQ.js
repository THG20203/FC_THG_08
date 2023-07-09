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
          <h3 className="faq-box__title heading-3">
            Where can I buy a season ticket?
          </h3>
          <p className="faq-box__text">
            You can buy your Serie A 2023-24 season ticket online at ; you can
            pay commission-free by credit card You will need to be registered on
            and be in possession of a membership card. Alternatively, you can go
            to the Stadium Office.
          </p>
          <button>
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </button>
        </div>
      </div>

      {/* FAQ question 2 */}
      <div className="faq__container">
        {/* whichever ones are active have a class of active */}
        <div className="faq-box active">
          <h3 className="faq-box__title heading-3">
            What games are included in the season ticket?
          </h3>
          <p className="faq-box__text">
            The season ticket includes all home games in the 2023-24 league
            season.
          </p>
          <button>
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </button>
        </div>
      </div>

      {/* FAQ question 3 */}
      <div className="faq__container">
        {/* whichever ones are active have a class of active */}
        <div className="faq-box active">
          <h3 className="faq-box__title heading-3">
            How do I sign up as a FC THG08 member?
          </h3>
          <p className="faq-box__text">
            For information and how to purchase a club membership, please visit
            the sign up page.
          </p>
          <button>
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
