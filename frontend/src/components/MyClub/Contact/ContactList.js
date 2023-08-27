import React from "react";

{
  /* By using props, made it configurable -> does now accept a title and description. This
  can and should be set when this component is being used in JSX code. */
}
const ContactList = (props) => {
  return (
    <li className="contact-list">
      <h4 className="heading-4--light">{props.title}</h4>
      <p className="paragraph-text">{props.description}</p>
    </li>
  );
};

export default ContactList;
