import React from "react";
import "./News.scss";
import NewsCard from "./NewsCard";
/* image files */
import conference from "../../../assets/images/news/conference.png";
import match from "../../../assets/images/news/match.png";
import trainingTop from "../../../assets/images/banners/training-top.png";
import shirtSale from "../../../assets/images/news/shirt-sale.png";
import corporatePartner from "../../../assets/images/news/corporate-partner.png";
import mural from "../../../assets/images/graffiti/mural.png";

const News = (props) => {
  const NewsCards = [
    {
      image: conference,
      alt: "Conference",
      heading: "Manager previews next league fixture",
      description:
        "Addressing the fixture with confidence and respect for the opposition, the manager highlighted the significance of preparation. 'Every match presents a unique set of challenges,' he noted, 'This upcoming fixture is no different. Our focus is on understanding our opponent's strengths and weaknesses, and adjusting our tactics accordingly.'",
      topic: "Team",
      date: "1 days ago",
    },
    {
      image: match,
      alt: "Match",
      heading: "Win over Crimson Pangmere FC",
      description:
        "FC THG 04 picked up three points in their first home game of the new season defeating Crimson Pangmere FC 3-0 on Wendesday night. Thomas Mahrez (16’), (75’) and  Ishmael Baptiste (90+2’) got the goals for FC THG 08. The visitors finished the game with ten men after defender Mehmet Kaya was red carded.",
      topic: "Team",
      date: "2 days ago",
    },
    {
      image: trainingTop,
      alt: "Training Top",
      heading: "State of the Art Academy Facility",
      description:
        "Step into the future of football excellence at our state-of-the-art Academy Facility. This cutting-edge complex is a harmonious fusion of innovation and technology, designed to nurture raw talent of the furture from youth training to the first team.",
      topic: "Club",
      date: "4 days ago",
    },
    {
      image: shirtSale,
      alt: "Shirt Sale",
      heading: "Purchase New Seasons Kit here",
      description:
        "As the anticipation builds for the upcoming season, we are thrilled to present the latest football kit for our beloved team, FC THG 08. A captivating blend of tradition, innovation, and the spirit of competition, this kit encapsulates the essence of who we are and what we strive to achieve on the field.",
      topic: "Club",
      date: "6 days ago",
    },
    {
      image: corporatePartner,
      alt: "Corporate Partner",
      heading: "New Corporate partner e-Payel",
      description:
        "Introducing e-Payel Payments, the dynamic and innovative corporate partner that has joined forces with our club. With a shared passion for excellence and a commitment to pushing boundaries, this collaboration marks a significant milestone in the journey towards success both on and off the field.",
      topic: "Club",
      date: "8 days ago",
    },
    {
      image: mural,
      alt: "Mural",
      heading: "Culture in spotlight: Graffiti",
      description:
        "Fans of FC THG 08 are known for their strong sense of pride and loyalty to the club, which is often reflected in the graffiti they create around the stadium and throughout the city. These fans believe that graffiti is a powerful way to express their love for the club and to connect with other fans.",
      topic: "Club",
      date: "10 days ago",
    },
  ];

  return (
    <section className="news-section">
      <h1 className="heading-1--dark mb-md news-section__title">
        More Headlines
      </h1>
      <div className="news-card__container">
        <NewsCard
          image={NewsCards[0].image}
          alt={NewsCards[0].alt}
          heading={NewsCards[0].heading}
          description={NewsCards[0].description}
          topic={NewsCards[0].topic}
          date={NewsCards[0].date}
        />
        <NewsCard
          image={NewsCards[1].image}
          alt={NewsCards[1].alt}
          heading={NewsCards[1].heading}
          description={NewsCards[1].description}
          topic={NewsCards[1].topic}
          date={NewsCards[1].date}
        />
        <NewsCard
          image={NewsCards[2].image}
          alt={NewsCards[2].alt}
          heading={NewsCards[2].heading}
          description={NewsCards[2].description}
          topic={NewsCards[2].topic}
          date={NewsCards[2].date}
        />
        <NewsCard
          image={NewsCards[3].image}
          alt={NewsCards[3].alt}
          heading={NewsCards[3].heading}
          description={NewsCards[3].description}
          topic={NewsCards[3].topic}
          date={NewsCards[3].date}
        />
        <NewsCard
          image={NewsCards[4].image}
          alt={NewsCards[4].alt}
          heading={NewsCards[4].heading}
          description={NewsCards[4].description}
          topic={NewsCards[4].topic}
          date={NewsCards[4].date}
        />
        <NewsCard
          image={NewsCards[5].image}
          alt={NewsCards[5].alt}
          heading={NewsCards[5].heading}
          description={NewsCards[5].description}
          topic={NewsCards[5].topic}
          date={NewsCards[5].date}
        />
      </div>
    </section>
  );
};

export default News;
