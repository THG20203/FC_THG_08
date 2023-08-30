import React from "react";
import "./Headline.scss";

const Headline = () => {
  return (
    <section className="headline-cards__section">
      <div className="headline-cards__row">
        <div className="headline-cards__col-1">
          <div className="headline-cards__card">Card</div>
        </div>
        <div className="headline-cards__col-2">
          <div className="headline-cards__card">Card</div>
        </div>
        <div className="headline-cards__col-3">
          <div className="headline-cards__card">Card</div>
        </div>
      </div>
    </section>
  );
};

export default Headline;
