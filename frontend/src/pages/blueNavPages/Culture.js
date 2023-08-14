import React from "react";
import "./Culture.scss";
import CultureContent from "../../components/CultureContent/CultureContent";
import CultureFormSection from "../../components/CultureForm/CulturalEntry/CultureFormSection";
import CulturalStory from "../../components/CultureForm/CulturalOutput/CulturalStory";

const CulturePage = () => {
  return (
    <div className="culture-container">
      <CultureContent />
      {/* Fan Story Submission Form: Allows fans to share their personal stories related to the club, 
      such as memorable match experiences, encounters with players, or how the club has impacted 
      their lives. */}
      <div className="culture-form__container">
        <CultureFormSection />
        <CulturalStory />
      </div>
    </div>
  );
};

export default CulturePage;
