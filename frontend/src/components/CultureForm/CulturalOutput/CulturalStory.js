import React, { useState } from "react";
import "./CulturalStory.scss";
import StoryItem from "./StoryItem.js";

const CulturalStory = (props) => {
  return (
    <div className="story-item__container">
      {props.contributions.map(
        /* story, which is passed as a parameter into the function below, 
        automatically (cause thats how map works) that story is used to extract
        the title, story, date etc below. */
        (story) => (
          <StoryItem
            title={story.title}
            story={story.story}
            name={story.name}
          />
        )
      )}
    </div>
  );
};

export default CulturalStory;
