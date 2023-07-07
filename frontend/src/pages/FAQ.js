import React from "react";
import "./FAQ.scss";
/* For font awesome icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

const FaqPage = () => {
  return;
  <>
    <h1 className="heading-1">Frequently Asked Questions</h1>
    <div class="faq-container">
      {/* whichever ones are active have a class of active */}
      <div class="faq active"></div>
    </div>
  </>;
};

export default FaqPage;
