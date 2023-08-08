import React from "react";
import "./Culture.scss";
/* images for culture page */
import underpass from "../../assets/images/graffiti/underpass.png";
import mural from "../../assets/images/graffiti/mural.png";
import CultureFormSection from "../../components/CultureForm/CultureFormSection";

const CulturePage = () => {
  return (
    <div className="culture-container">
      {/* Story Pictures section */}
      <div className="story__pictures">
        <img className="story__img--1" src={underpass} alt="underpass" />
        <img className="story__img--2" src={mural} alt="mural" />
      </div>

      {/* Story Content section */}
      <div className="story__content">
        <h3 className="heading-3 mb-sm">A piece on our distinct culture...</h3>
        <h1 className="heading-1--dark mb-md">Graffiti Art</h1>
        <p className="story__text paragraph-text">
          Fans of FC THG 08 are known for their strong sense of pride and
          loyalty to the club, which is often reflected in the graffiti they
          create around the stadium and throughout the city. These fans believe
          that graffiti is a powerful way to express their love for the club and
          to connect with other fans. They often depict the club's crest,
          players, and name in blue - the traditional colour of FC THG 08.
          <br />
          <br />
          Graffiti is seen as a way to assert the team's identity in the
          community and to create a sense of belonging among fans. Despite this
          being considered as vandalism by some, the fans of FC THG 08 see it as
          a way to add to their club's and city's culture.
        </p>
      </div>
      {/* Fan Story Submission Form: Allows fans to share their personal stories related to the club, 
      such as memorable match experiences, encounters with players, or how the club has impacted 
      their lives. */}
      <CultureFormSection />
    </div>
  );
};

export default CulturePage;
