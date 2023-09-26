import React from "react";
import Countdown from "./Countdown";
import "./MatchTimer.scss";
import footballPitch from "../../../../assets/images/footballPitch/football-pitch.png";

const MatchTimer = () => {
  return (
    <div className="match-timer__container">
      <img className="match-timer__image" src={footballPitch} alt="Pitch" />
      <Countdown />
    </div>
  );
};

export default MatchTimer;
