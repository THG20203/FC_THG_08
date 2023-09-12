import React from "react";
import "./Players.scss";
import Player1 from "../../../assets/images/players/Player1.png";
import Player2 from "../../../assets/images/players/Player2.png";
import Player3 from "../../../assets/images/players/Player3.png";

const Players = () => {
  return (
    <div className="players__container">
      <img className="" src={Player1} />
      <img className="" src={Player2} />
      <img className="" src={Player3} />
    </div>
  );
};

export default Players;
