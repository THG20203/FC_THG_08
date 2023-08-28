import React from "react";

const NewsCard = (props) => {
  return (
    <div className="news-card__content">
      <div className="news-card__img-div mb-sm">
        <img className="news-card__image" src={props.image} alt={props.alt} />
      </div>
      <h2 className="news-card__heading heading-2 mb-sm">{props.heading}</h2>
      <p className="news-card__description paragraph-text">
        {props.description}
      </p>
    </div>
  );
};

export default NewsCard;
