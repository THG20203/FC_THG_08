import React from "react";
import "./Button.scss";

const Button = () => {
  return (
    <button type="submit" className="btn">
      Submit
      <div class="btn__wave"></div>
    </button>
  );
};

export default Button;
