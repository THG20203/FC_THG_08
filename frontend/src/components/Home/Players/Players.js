import React from "react";
import "./Players.scss";
import Player1 from "../../../assets/images/players/Player1.png";
import Player2 from "../../../assets/images/players/Player2.png";
import Player3 from "../../../assets/images/players/Player3.png";

const Players = () => {
  return (
    <div className="players__container">
      <div className="players__list">
        <img className="players__img" src={Player1} alt="Ishmael Baptiste" />
        <div className="players__details">
          <h4 className="heading-4--light">Ishmael Baptiste</h4>
          <p className="players__stats paragraph-text">Example Text</p>
        </div>
        <img className="players__img" src={Player2} alt="Frank Carter" />
        <div className="players__details">
          <h4 className="heading-4--light">Frank Carter</h4>
          <p className="players__stats paragraph-text">Example Text</p>
        </div>
        <img className="players__img" src={Player3} alt="Thomas Mahrez" />
        <div className="players__details">
          <h4 className="heading-4--light">Thomas Mahrez</h4>
          <p className="players__stats paragraph-text">Example Text</p>
        </div>
      </div>
    </div>
  );
};

export default Players;
