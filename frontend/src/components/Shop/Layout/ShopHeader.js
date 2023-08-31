import React from "react";
import "./ShopHeader.scss";
import shopBanner from "../../../assets/images/shop/shop-banner.png";
import ShopHeaderCartButton from "./ShopHeaderCartButton";

const ShopHeader = (props) => {
  return (
    <div className="shop-header">
      <section className="shop-header__content">
        <h2 className="shop-header__title heading-2">Shop Items</h2>
        <ShopHeaderCartButton />
      </section>
      <div className="shop-header__banner">
        <img
          className="shop-header__image"
          src={shopBanner}
          alt="shopBannerImage"
        />
      </div>
    </div>
  );
};

export default ShopHeader;
