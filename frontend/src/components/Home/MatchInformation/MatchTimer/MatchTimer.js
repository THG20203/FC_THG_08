import React from "react";
import Countdown from "./Countdown";
import "./MatchTimer.scss";
import footballPitch from "../../../../assets/images/footballPitch/football-pitch.png";
import footballerSilhouette from "../../../../assets/images/footballPitch/footballer-silhouette.png";

const MatchTimer = () => {
  return (
    <div className="match-timer__container">
      <div className="match-timer__image-div">
        <img className="match-timer__img" src={footballPitch} alt="Pitch" />
      </div>
      <div className="match-timer__image-div">
        <img
          className="match-timer__img--2"
          src={footballerSilhouette}
          alt="Pitch"
        />
      </div>
      <Countdown />
    </div>
  );
};

export default MatchTimer;
