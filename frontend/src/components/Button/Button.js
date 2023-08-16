import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button className="btn">
      {props.text}
      <div className="btn__wave"></div>
    </button>
  );
};

export default Button;
