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

const NewsCards = [
  {
    image: corporatePartner,
    alt: "Corporate Partner",
    heading: "New Corporate partner e-Payel",
    description:
      "Introducing e-Payel Payments, the dynamic and innovative corporate partner that has joined forces with our club. With a shared passion for excellence and a commitment to pushing boundaries, this collaboration marks a significant milestone in the journey towards success both on and off the field.",
  },
  {
    image: match,
    alt: "Match",
    heading: "3-0 win over Crimson Pangmere FC",
    description:
      "FC THG 04 picked up three points in their first home game of the new season defeating Crimson Pangmere FC 3-0 on Saturday night. Thomas Mahrez (16’), ('75) and  Ishmael Baptiste (90+2’) got the goals for FC THG 08. The visitors finished the game with ten men after defender Mehmet Kaya was red carded.",
  },
  {
    image: trainingTop,
    alt: "Training Top",
    heading: "State of the Art Academy Facility",
    description:
      "Step into the future of football excellence at our state-of-the-art Academy Facility. This cutting-edge complex is a harmonious fusion of innovation and technology, designed to nurture raw talent of the furture from youth training to the first team.",
  },
  {
    image: shirtSale,
    alt: "Shirt Sale",
    heading: "Purchase New Seasons Kit here",
    description:
      "As the anticipation builds for the upcoming season, we are thrilled to present the latest football kit for our beloved team, FC THG 08. A captivating blend of tradition, innovation, and the spirit of competition, this kit encapsulates the essence of who we are and what we strive to achieve on the field.",
  },
  {
    image: playerFlag,
    alt: "Player Flag",
    heading: "Fabio Lombardy joins FC THG 08 on Loan",
    description:
      "Italian youth international Fabio Lombardy has joined FC THG 08 on a season-long loan. A buy option has also been agreed upon for the 19-year-old attacker. Lombardy scored nine goals and recorded two assists in 20 games in the Regional Liga last season.",
  },
  {
    image: mural,
    alt: "Mural",
    heading: "Culture in spotlight: Graffiti Art",
    description:
      "Fans of FC THG 08 are known for their strong sense of pride and loyalty to the club, which is often reflected in the graffiti they create around the stadium and throughout the city. These fans believe that graffiti is a powerful way to express their love for the club and to connect with other fans.",
  },
];

const News = () => {
  return (
    <section className="news-section">
      <h1 className="heading-1 mb-sm">Headlines</h1>
      <div className="news-card__container">
        <NewsCard /> {/* corporate partner -> link corporate partner */}
        <NewsCard /> {/* match -> link to match report */}
        <NewsCard /> {/* training top -> link to article */}
        <NewsCard /> {/* shirt sale -> link to shop */}
        <NewsCard /> {/* player-flag -> link to player article*/}
        <NewsCard /> {/* mural -> link to culture page */}
      </div>
    </section>
  );
};

export default News;
