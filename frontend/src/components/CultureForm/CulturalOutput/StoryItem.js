import React, { useState } from "react";
import "./StoryItem.scss";

const StoryItem = (props) => {
  return (
    <div className="story-item__card">
      <div className="story-item__face face1">
        <h2 className="heading-2 story-item__heading">Services</h2>
        <p className="paragraph-text story-item__paragraph">
          Lorem ipsum test text.
        </p>
      </div>
      <div className="story-item__face face2">
        <h2 className="heading-2 story-item__heading">88</h2>
      </div>
    </div>
  );
};

export default StoryItem;
