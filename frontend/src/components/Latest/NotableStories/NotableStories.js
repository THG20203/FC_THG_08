import React from "react";
import "./NotableStories.scss";

const NotableStories = () => {
  return (
    <div className="notable-stories__container">
      <figure className="notable-stories__review">
        <blockquote className="notable-stories__review-text"></blockquote>
        <figcaption className="notable-stories__review-user"></figcaption>
      </figure>
      <figure className="notable-stories__review">
        <blockquote className="notable-stories__review-text"></blockquote>
      </figure>
    </div>
  );
};

export default NotableStories;
