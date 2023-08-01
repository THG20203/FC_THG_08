import React from "react";

import "./Card.scss";

const Card = (props) => {
  {
    /* We add whatever is set as a className on card to the className string we're setting 
    as a className on that div. Card is a default class which is always applied, white space, 
    + props.className. So now, anything we recieve as a className from outside is added 
    to that string. */
    /* className is a props name of the Card component. Not an HTML (CSS) attribute name.
    This is because the <Card .... /> is a JSX tag, not an HTML element. 
    <div className={classes}> is the same as: <div className="card expenses">. */
  }
  const classes = "card " + props.className;
  {
    /* props.children -> children is a reserved name. Value of children prop will always be 
    the content between the opening and closing tags of your custom component. */
    /* So the content in the ExpenseItem component which is inside the Card tag, thats what 
    will be available on props.children inside of that Card. */
    /* So now, any values set on the className prop is added to this long string of classNames
    which is finally set on this div inside of the card.  */
  }
  return <div className={classes}>{props.children}</div>;
};

export default Card;
