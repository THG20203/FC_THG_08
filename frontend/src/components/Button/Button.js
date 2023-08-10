import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button type="submit" className="btn">
      {props.text}
      <div className="btn__wave"></div>
    </button>
  );
};

export default Button;
