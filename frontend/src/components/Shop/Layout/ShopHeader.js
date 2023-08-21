import React, { Fragment } from "react";
import "./ShopHeader.scss";

const ShopHeader = (props) => {
  return (
    <Fragment>
      <section>
        <h1 className="heading-1--light">Shop Items</h1>
        <button>Cart</button>
      </section>
      <div>
        <img />
      </div>
    </Fragment>
  );
};

export default ShopHeader;
