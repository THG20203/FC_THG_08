import React from "react";
import "./Headline.scss";

const Headline = () => {
  return (
    <section className="headline-cards__section">
      <div className="headline-cards__row">
        <div className="headline-cards__col-1">
          <div className="headline-cards__card">
            <div className="headline-cards__card-side headline-cards__card-side--front">
              Card
            </div>
            <div className="headline-cards__card-side headline-cards__card-side--back">
              back
            </div>
          </div>
        </div>
        <div className="headline-cards__col-2">
          <div className="headline-cards__card">
            <div className="headline-cards__card-side headline-cards__card-side--front">
              Card
            </div>
            <div className="headline-cards__card-side headline-cards__card-side--back">
              back
            </div>
          </div>
        </div>
        <div className="headline-cards__col-3">
          <div className="headline-cards__card">
            <div className="headline-cards__card-side headline-cards__card-side--front">
              Card
            </div>
            <div className="headline-cards__card-side headline-cards__card-side--back">
              back
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headline;
