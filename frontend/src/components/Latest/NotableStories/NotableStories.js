import React from "react";
import "./NotableStories.scss";
/* player images */
import player1 from "../../../assets/images/playerImgs/Player1";
import player2 from "../../../assets/images/playerImgs/Player2";

const NotableStories = () => {
  return (
    <div className="notable-stories__container">
      <figure className="notable-stories__review">
        <blockquote className="notable-stories__review-text">
          Early days on the pitch have been a test, but your support has been
          amazing. Our fans are like our secret weapon, pushing us on.
        </blockquote>
        <img
          src={player1}
          alt="Player 1 Image"
          className="notable-stories__review-image"
        ></img>
      </figure>
      <figure className="notable-stories__review">
        <blockquote className="notable-stories__review-text">
          The gaffer's been like our tactical wizard, keeping us motivated.
          Every tackle we put in and every goal we chase is for the badge.
        </blockquote>
        <img
          src={player2}
          alt="Player 2 Image"
          className="notable-stories__review-image"
        ></img>
      </figure>
    </div>
  );
};

export default NotableStories;
