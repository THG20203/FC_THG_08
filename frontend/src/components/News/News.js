import React from "react";
import "./News.scss";
/* image files */
import corporatePartner from "../../assets/images/news/corporate-partner.png";
import match from "../../assets/images/news/match.png";
import trainingTop from "../../assets/images/banners/training-top.png";
import shirtSale from "../../assets/images/news/shirt-sale.png";
import playerFlag from "../../assets/images/news/player-flag.png";
import mural from "../../assets/images/graffiti/mural.png";
import NewsCard from "./NewsCard";

const News = (props) => {
  return (
    <section className="news-section">
      <h1 className="heading-1 mb-sm">Latest Headlines</h1>
      <NewsCard /> {/* corporate partner -> link corporate partner */}
      <NewsCard /> {/* match -> link to match report */}
      <NewsCard /> {/* training top -> link to article */}
      <NewsCard /> {/* shirt sale -> link to shop */}
      <NewsCard /> {/* player-flag -> link to player article*/}
      <NewsCard /> {/* mural -> link to culture page */}
    </section>
  );
};

export default News;
