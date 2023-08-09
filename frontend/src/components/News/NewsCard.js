import React from "react";

const NewsCard = (props) => {
  return (
    <div className="news-card__content">
      <img
        className="news-card__image mb-sm"
        src={props.image}
        alt={props.alt}
      />
      <h3 className="news-card__heading heading-2 mb-sm">{props.heading}</h3>
      <p className="news-card__description paragraph-text">
        {props.description}
      </p>
    </div>
  );
};

export default NewsCard;
