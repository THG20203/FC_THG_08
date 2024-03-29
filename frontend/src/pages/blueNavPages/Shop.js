import React, { Fragment } from "react";
import "./Shop.scss";
import ShopHeader from "../../components/Shop/Layout/ShopHeader";
import ShopItems from "../../components/Shop/Items/ShopItems";

const ShopPage = () => {
  return (
    <div className="shop-page__container">
      <ShopHeader />
      <ShopItems />
    </div>
  );
};

export default ShopPage;
