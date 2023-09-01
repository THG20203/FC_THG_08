import React from "react";
import "./Marquee.scss";
import ePayel from "../../assets/images/logos/e-payel.png";
import foliole from "../../assets/images/logos/foliole.png";
import shalbourne from "../../assets/images/logos/shalbourne.png";
import subiro from "../../assets/images/logos/subiro.png";
import sword from "../../assets/images/logos/sword.png";
import ultramarine from "../../assets/images/logos/ultramarine.png";

const Marquee = () => {
  return (
    <div className="marquee__container">
      <div className="marquee__content">
        <img src={ePayel} alt="E payel logo" />
        <img src={foliole} alt="Foliole logo" />
        <img src={shalbourne} alt="Shalbourne logo" />
        <img src={subiro} alt="Subiro logo" />
        <img src={sword} alt="Sword logo" />
        <img src={ultramarine} alt="Ultramarine logo" />
      </div>
    </div>
  );
};

export default Marquee;
