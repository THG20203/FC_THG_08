import React from "react";
import SlideToUnlock from "../../components/History/LockSlider/SlideToUnlock";
import HistoryText from "../../components/History/HistoryText/HistoryText";
import HistoryFounder from "../../components/History/HistoryFounder/HistoryFounder";
import "./History.scss";

const HistoryPage = () => {
  return (
    <div className="history-container">
      <SlideToUnlock />
      <HistoryText />
      <HistoryFounder />
    </div>
  );
};

export default HistoryPage;
