import React, { useState } from "react";
import "./CulturalStory.scss";
import StoryItem from "./StoryItem.js";

const CulturalStory = (props) => {
  return (
    <div className="story-item__container">
      {props.contributions.map(
        /* story, which is passed as a parameter into the function below, 
        automatically (cause thats hosw map works) that story is used to extract
        the title, story, date etc below. */
        (story) => (
          <StoryItem
            title={story.title}
            story={story.title}
            date={story.expense}
          />
        )
      )}
      <StoryItem
        title={props.contributions[0].title}
        story={props.contributions[0].story}
        name={props.contributions[0].name}
      />
      <StoryItem
        title={props.contributions[1].title}
        story={props.contributions[1].story}
        name={props.contributions[1].name}
      />
      <StoryItem
        title={props.contributions[2].title}
        story={props.contributions[2].story}
        name={props.contributions[2].name}
      />
    </div>
  );
};

export default CulturalStory;
