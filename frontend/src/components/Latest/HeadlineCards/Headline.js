import React from "react";
import "./Headline.scss";

const Headline = () => {
  return (
    <div className="headline-cards__row">
      <div className="headline-cards__col-1">Col 1 of 3</div>
      <div className="headline-cards__col-2">Col 2 of 3</div>
      <div className="headline-cards__col-3">Col 3 of 3</div>
    </div>
  );
};

export default Headline;
