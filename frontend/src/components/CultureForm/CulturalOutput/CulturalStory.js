import React, { useState } from "react";
import "./CulturalStory.scss";
import StoryItem from "./StoryItem.js";

const CulturalStory = (props) => {
  return (
    <div className="story-item__container">
      <StoryItem />
      <StoryItem />
      <StoryItem />
    </div>
  );
};

export default CulturalStory;
