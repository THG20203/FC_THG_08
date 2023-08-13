import React, { useState } from "react";
import "./StoryItem.scss";

const StoryItem = (props) => {
  return (
    <div className="card">
      <div className="face face1">
        <h2 className="heading-2">Services</h2>
        <p>Lorem ipsum test text.</p>
      </div>
      <div className="face face2">
        <h2>88</h2>
      </div>
    </div>
  );
};

export default StoryItem;
