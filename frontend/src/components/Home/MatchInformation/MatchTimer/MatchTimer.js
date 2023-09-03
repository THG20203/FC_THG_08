import React from "react";
import Countdown from "./Countdown";
import "./MatchTimer.scss";

const MatchTimer = () => {
  return (
    <div className="match-timer__container">
      <Countdown />
    </div>
  );
};

export default MatchTimer;
