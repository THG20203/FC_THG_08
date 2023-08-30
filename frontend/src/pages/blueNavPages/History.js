import React from "react";
import SlideToUnlock from "../../components/History/LockSlider/SlideToUnlock";
import HistoryText from "../../components/History/HistoryText/HistoryText";
import HistoryFounder from "../../components/History/HistoryFounder/HistoryFounder";
import HistoryBadge from "../../components/History/HistoryBadge/HistoryBadge";
import SerpentHistory from "../../components/History/SerpentHistory/SerpentHistory";
import "./History.scss";

const HistoryPage = () => {
  return (
    <div className="history-container">
      <SlideToUnlock />
      <HistoryText />
      <HistoryFounder />
      <HistoryBadge />
      <SerpentHistory />
    </div>
  );
};

export default HistoryPage;
