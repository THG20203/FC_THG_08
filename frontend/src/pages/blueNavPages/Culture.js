import React from "react";
import "./Culture.scss";
import CultureContent from "../../components/CultureContent/CultureContent";
import CultureFormSection from "../../components/CultureForm/CulturalEntry/CultureFormSection";
import CulturalStory from "../../components/CultureForm/CulturalOutput/CulturalStory";

const stories = [
  {
    id: "s1",
    title: "Miracle Comeback",
    story:
      "Down 3-0, the team rallied in the final minutes. Fans witnessed a jaw-dropping turnaround, erupting in euphoria. Unforgettable victory.",
    name: "Tristan",
  },
  {
    id: "s2",
    title: "Stadium Roar",
    story:
      "The stadium quaked as a last-minute goal secured the championship. Deafening cheers resonated, echoing the team's triumph.",
    name: "Harry",
  },
  {
    id: "s3",
    title: "Historic Triumph",
    story:
      "FC THG 08 claimed the league title after decades. The city painted in team colors, streets celebrating a long-awaited victory parade.",
    name: "Becky",
  },
];

const CulturePage = () => {
  return (
    <div className="culture-container">
      <CultureContent />
      {/* Fan Story Submission Form: Allows fans to share their personal stories related to the club, 
      such as memorable match experiences, encounters with players, or how the club has impacted 
      their lives. */}
      <div className="culture-form__container">
        <CultureFormSection />
        <CulturalStory story={stories} />
      </div>
    </div>
  );
};

export default CulturePage;
