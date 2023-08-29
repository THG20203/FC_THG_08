import React from "react";
import SlideToUnlock from "../../components/History/LockSlider/SlideToUnlock";
import HistoryText from "../../components/History/HistoryText/HistoryText";
import "./History.scss";

const HistoryPage = () => {
  return (
    <div className="history-container">
      <SlideToUnlock />
      <HistoryText />
    </div>
  );
};

export default HistoryPage;
