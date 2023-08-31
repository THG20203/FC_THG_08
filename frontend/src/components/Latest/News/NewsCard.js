import React from "react";

const NewsCard = (props) => {
  return (
    <div className="news-card__content">
      <div className="news-card__img-div mb-sm">
        <img className="news-card__image" src={props.image} alt={props.alt} />
      </div>
      <h4 className="news-card__heading heading-4">{props.heading}</h4>
      <p className="news-card__description">{props.description}</p>
      <p className="news-card__topic">{props.topic}</p>
      <p className="news-card__date">{props.date}</p>
    </div>
  );
};

export default NewsCard;
