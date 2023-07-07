import React from "react";
import "./FAQ.scss";
/* For font awesome icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

const FaqPage = () => {
  return (
    <>
      <h1 className="heading-1">Frequently Asked Questions</h1>
      <div className="faq-container">
        {/* whichever ones are active have a class of active */}
        <div className="faq-box active">
          <h3 className="faq-box__title heading-3">
            Where can I buy a season ticket?
          </h3>
          <p className="faq-box__text"></p>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
