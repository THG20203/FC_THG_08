import React from "react";
import "./NotableStories.scss";
/* player images */
import player1 from "../../../assets/images/playerImgs/Player1.png";
import player2 from "../../../assets/images/playerImgs/Player2.png";

/* takes date object as a parameter because it needs to format that date 
to dd.mm.yy. By passing date object as a parameter, the function can access the 
info from the date object -> day, month, year to create formatted date string. */
const formatDate = (date) => {
  const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
  /* 1st argument= locale, second is options -> i.e how formatted. As shown in const above. */
  return date.toLocaleDateString("en-GB", options);
};

const NotableStories = () => {
  const currentDate = new Date();
  /* get date from 3 days ago */
  const threeDaysAgo = new Date(currentDate);
  /* getDate() means get date of the month - returns day of the month 1-31 */
  threeDaysAgo.setDate(currentDate.getDate() - 3);

  /* get date from 8 days ago */
  const eightDaysAgo = new Date(currentDate);
  /* getDate() means get date of the month - returns day of the month 1-31 */
  eightDaysAgo.setDate(currentDate.getDate() - 8);

  const formattedThreeDaysAgo = formatDate(threeDaysAgo);
  const formattedEightDaysAgo = formatDate(eightDaysAgo);

  return (
    <div className="notable-stories__container">
      {/* First figure box */}
      <figure className="notable-stories__review notable-stories__review--1 paragraph-text">
        <blockquote className="notable-stories__review-text">
          Early days on the pitch have been a test, but your support has been
          amazing. Our fans are like our secret weapon, pushing us on.
        </blockquote>
        <figcaption className="notable-stories__review-content">
          <img
            src={player1}
            alt="Player 1 Image"
            className="notable-stories__review-image"
          ></img>
          <div className="notable-stories__review-box">
            <p className="notable-stories__review-user">Ishmael Baptiste</p>
            <p className="notable-stories__review-date">
              {formattedThreeDaysAgo}
            </p>
          </div>
          <div className="notable-stories__review-position">Forward</div>
        </figcaption>
      </figure>
      {/* Second figure box */}
      <figure className="notable-stories__review notable-stories__review--2 paragraph-text">
        <blockquote className="notable-stories__review-text">
          The gaffer's been a great man manager, keeping us motivated. Every
          tackle we put in and every goal we chase is for the badge.
        </blockquote>
        <figcaption className="notable-stories__review-content">
          <img
            src={player2}
            alt="Player 2 Image"
            className="notable-stories__review-image"
          ></img>
          <div className="notable-stories__review-box">
            <p className="notable-stories__review-user">Frank Carter</p>
            <p className="notable-stories__review-date">
              {formattedEightDaysAgo}
            </p>
          </div>
          <div className="notable-stories__review-position">Midfielder</div>
        </figcaption>
      </figure>
    </div>
  );
};

export default NotableStories;
