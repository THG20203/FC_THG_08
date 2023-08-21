import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./ShopHeaderCartButton.scss";

const ShopHeaderCartButton = (props) => {
  return (
    <button className="btn">
      <FontAwesomeIcon
        className="shop-header__icon"
        icon={faCartShopping}
      ></FontAwesomeIcon>
      Your Cart<div className="btn__wave"></div>
    </button>
  );
};

export default ShopHeaderCartButton;
