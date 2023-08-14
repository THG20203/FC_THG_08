import React, { useState } from "react";
import "./CulturalStory.scss";
import StoryItem from "./StoryItem.js";

const CulturalStory = (props) => {
  return (
    <div className="story-item__container">
      <StoryItem
        title={props.story[0].title}
        story={props.story[0].story}
        name={props.story[0].name}
      />
      <StoryItem
        title={props.story[1].title}
        story={props.story[1].story}
        name={props.story[1].name}
      />
      <StoryItem
        title={props.story[2].title}
        story={props.story[2].story}
        name={props.story[2].name}
      />
    </div>
  );
};

export default CulturalStory;
