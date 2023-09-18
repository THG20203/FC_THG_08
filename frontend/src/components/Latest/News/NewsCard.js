import React from "react";

const NewsCard = (props) => {
  return (
    <div className="news-card__content">
      <div className="news-card__img-div">
        <img className="news-card__image" src={props.image} alt={props.alt} />
      </div>
      <div className="news-card__text">
        <h4 className="news-card__heading heading-4">{props.heading}</h4>
        <div className="news-card__detail">
          <p className="news-card__description">{props.description}</p>
          <div className="news-card__footer">
            <p className="news-card__topic">{props.topic}</p>
            <p className="news-card__date">{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
