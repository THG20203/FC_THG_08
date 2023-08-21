import React, { Fragment } from "react";
import "./ShopHeader.scss";
import shopBanner from "../../../assets/images/shop/shop-banner.png";

const ShopHeader = (props) => {
  return (
    <Fragment>
      <section className="shop-header">
        <h1 className="heading-1--light">Shop Items</h1>
        <button>Cart</button>
      </section>
      <div className="shop-header__image--content">
        <img
          className="shop-header__image"
          src={shopBanner}
          alt="shopBannerImage"
        />
      </div>
    </Fragment>
  );
};

export default ShopHeader;
