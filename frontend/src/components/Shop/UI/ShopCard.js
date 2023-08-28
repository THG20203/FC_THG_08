import React from "react";
import "./ShopCard.scss";

const ShopCard = (props) => {
  return <div className="shop-card">{props.children}</div>;
};

export default ShopCard;
