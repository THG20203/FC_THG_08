import React from "react";
import "./Features.scss";
/* For font awesome icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faSoccerBall,
  faTicket,
  faMapPin,
  faHandshake,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <FontAwesomeIcon
          className="feature__icon"
          icon={faUsers}
        ></FontAwesomeIcon>
        <h4 className="heading-4">Membership</h4>
        <p className="paragraph-text">
          Creating a Blue Sea Serpents account unlocks exclusive video content,
          including match highlights, player interviews and analysis.
        </p>
      </div>
      <div className="feature">
        <FontAwesomeIcon
          className="feature__icon"
          icon={faSoccerBall}
        ></FontAwesomeIcon>
        <h4 className="heading-4">Official Supporters Clubs</h4>
        <p className="paragraph-text">
          We are proud to have 225 Official Supporters' Clubs in countries all
          over the world, including England, Italy, USA and Germany.
        </p>
      </div>
      <div className="feature">
        <FontAwesomeIcon
          className="feature__icon"
          icon={faTicket}
        ></FontAwesomeIcon>
        <h4 className="heading-4">Tickets & Hospitality</h4>
        <p className="paragraph-text">
          A Blue Sea Serpents membership allows supporters priority purchasing
          matchday tickets. Hospitality packages are also availiable, with our
          complex playing host to a premium conference center.
        </p>
      </div>
      <div className="feature">
        <FontAwesomeIcon
          className="feature__icon"
          icon={faMapPin}
        ></FontAwesomeIcon>
        <h4 className="heading-4">Location</h4>
        <p className="paragraph-text">
          Our stadium, ticket office and merchandise shop are all located in the
          heart of the city.
        </p>
      </div>
      <div className="feature">
        <FontAwesomeIcon
          className="feature__icon"
          icon={faHandshake}
        ></FontAwesomeIcon>
        <h4 className="heading-4">Partners</h4>
        <p className="paragraph-text">
          We are proud to recognise 18 official club partners this season, as
          principal, official and women's team associates.
        </p>
      </div>
      <div className="feature">
        <FontAwesomeIcon
          className="feature__icon"
          icon={faTrophy}
        ></FontAwesomeIcon>
        <h4 className="heading-4">Trophies</h4>
        <p className="paragraph-text">
          The Blue Sea Serpents have won it all. 25 league titles, 15 domestic
          cups and 8 international triumphs since we were founded in 1893.
        </p>
      </div>
    </section>
  );
};

export default Features;
