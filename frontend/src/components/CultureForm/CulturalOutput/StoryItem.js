import React, { useState } from "react";
import "./StoryItem.scss";

const StoryItem = (props) => {
  return (
    <div className="story-item__card mb-sm">
      <div className="story-item__face1">
        <div className="story-item__name">
          <h3 className="heading-4">Full Name</h3>
        </div>
        <div className="story-item__title">
          <h3 className="heading-3">Fan Story Title</h3>
        </div>
      </div>
      <div className="story-item__face2">
        <div className="story-item__content">
          <p className="paragraph-text">
            Lorem ipsum test text for now to fill this space a bit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryItem;
