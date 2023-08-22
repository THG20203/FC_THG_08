import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./ShopHeaderCartButton.scss";

const ShopHeaderCartButton = (props) => {
  return (
    <button className="btn">
      <FontAwesomeIcon
        className="shop-cart__icon"
        icon={faCartShopping}
      ></FontAwesomeIcon>
      Your Cart<div className="btn__wave"></div>
      <span className="shop-cart__badge">3</span>
    </button>
  );
};

export default ShopHeaderCartButton;
