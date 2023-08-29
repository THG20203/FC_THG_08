import React from "react";
import "./HistoryBadge.scss";
import badge from "../../../assets/images/identity/football-badge.png";

const HistoryBadge = () => {
  return (
    <div className="history-badge__container">
      <img src={badge} alt="Badge" />
    </div>
  );
};

export default HistoryBadge;
