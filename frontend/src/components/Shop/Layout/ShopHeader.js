import React from "react";
import "./ShopHeader.scss";
import shopBanner from "../../../assets/images/shop/shop-banner.png";
import ShopHeaderCartButton from "./ShopHeaderCartButton";

const ShopHeader = (props) => {
  return (
    <div className="shop-header">
      <section className="shop-header__content">
        <h1 className="heading-2">Shop Items</h1>
        <ShopHeaderCartButton />
      </section>
      <div className="shop-header__image--content">
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
