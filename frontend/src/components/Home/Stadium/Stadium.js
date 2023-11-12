import React from "react";
import "./Stadium.scss";
import stadium from "../../../assets/images/stadium/stadium.png";
/* logo imports */
import ePayel from "../../../assets/images/logos/e-payel.png";
import foliole from "../../../assets/images/logos/foliole.png";
import shalbourne from "../../../assets/images/logos/shalbourne.png";
import subiro from "../../../assets/images/logos/subiro.png";
import sword from "../../../assets/images/logos/sword.png";
import ultramarine from "../../../assets/images/logos/ultramarine.png";

const Stadium = () => {
  return (
    <div className="stadium__container">
      <div className="stadium__sponsors">
        <img className="stadium__sponsor--img" src={ePayel} alt="ePayel" />
        <img className="stadium__sponsor--img" src={foliole} alt="foliole" />
        <img
          className="stadium__sponsor--img"
          src={shalbourne}
          alt="shalbourne"
        />
        <img className="stadium__sponsor--img" src={subiro} alt="subiro" />
        <img className="stadium__sponsor--img" src={sword} alt="sword" />
        <img
          className="stadium__sponsor--img"
          src={ultramarine}
          alt="ultramarine"
        />
      </div>
    </div>
  );
};

export default Stadium;
