import React from "react";
import "./HistoryBadge.scss";
import badge from "../../../assets/images/identity/football-badge.png";

const HistoryBadge = () => {
  return (
    <div className="history-badge__container">
      <img src={badge} alt="Badge" />
      <div className="history-badge__caption">
        <h2 className="heading-2--light">Caption</h2>
      </div>
    </div>
  );
};

export default HistoryBadge;
