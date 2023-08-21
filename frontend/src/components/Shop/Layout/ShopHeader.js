import React, { Fragment } from "react";
import "./ShopHeader.scss";
import shopBanner from "../../../assets/images/shop/shop-banner.png";

const ShopHeader = (props) => {
  return (
    <div className="shop-header">
      <section className="shop-header__content">
        <h1 className="heading-2">Shop Items</h1>
        <button className="btn">
          Cart<div className="btn__wave"></div>
        </button>
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
