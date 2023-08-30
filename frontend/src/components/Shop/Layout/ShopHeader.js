import React from "react";
import "./ShopHeader.scss";
import shopBanner from "../../../assets/images/shop/shop-banner.png";
import ShopHeaderCartButton from "./ShopHeaderCartButton";

const ShopHeader = (props) => {
  return (
    <div className="shop-header">
      <section className="shop-header__content">
        <h4 className="shop-header__title heading-4--light">Shop Items</h4>
        <ShopHeaderCartButton />
      </section>
      <img
        className="shop-header__image"
        src={shopBanner}
        alt="shopBannerImage"
      />
    </div>
  );
};

export default ShopHeader;
