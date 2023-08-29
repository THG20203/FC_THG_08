import React from "react";
import SlideToUnlock from "../../components/History/LockSlider/SlideToUnlock";
import HistoryText from "../../components/History/HistoryText/HistoryText";
import HistoryFounder from "../../components/History/HistoryFounder/HistoryFounder";
import HistoryBadge from "../../components/History/HistoryBadge/HistoryBadge";
import "./History.scss";

const HistoryPage = () => {
  return (
    <div className="history-container">
      <SlideToUnlock />
      <HistoryText />
      <HistoryFounder />
      <HistoryBadge />
    </div>
  );
};

export default HistoryPage;
