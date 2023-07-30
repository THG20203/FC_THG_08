import React from "react";

import "./Card.scss";

const Card = (props) => {
  const classes = "card " + props.className;
  {
    /* props.children -> children is a reserved name. Value of children prop  */
  }
  return <div className={classes}>{props.children}</div>;
};

export default Card;
