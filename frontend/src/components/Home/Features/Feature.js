import React from "react";
/* For font awesome icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Feature = (props) => {
  return (
    <div className="feature">
      <FontAwesomeIcon
        className="feature__icon"
        icon={props.icon}
      ></FontAwesomeIcon>
      <h4 className="heading-4">{props.title}</h4>
      <p className="paragraph-text">{props.description}</p>
    </div>
  );
};

export default Feature;
