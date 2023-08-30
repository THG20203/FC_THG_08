import React from "react";
import "./HistoryBadge.scss";
import badge from "../../../assets/images/identity/football-badge.png";

const HistoryBadge = () => {
  return (
    <div className="history-badge__container">
      <img className="history-badge__image" src={badge} alt="Badge" />
      <div className="history-badge__caption">
        <h1 className="heading-1--light history-badge__caption-heading">
          Caption
        </h1>
        <p className="paragraph-text history-badge__caption-paragraph">test</p>
      </div>
    </div>
  );
};

export default HistoryBadge;
