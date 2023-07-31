import React from "react";
import "./Features.scss";
/* For font awesome icons */
import {
  faUsers,
  faSoccerBall,
  faTicket,
  faMapPin,
  faHandshake,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import Feature from "./Feature";

const feature = [
  {
    icon: faUsers,
    title: "Membership",
    description:
      "Creating a Blue Sea Serpents account unlocks exclusive video content, including match highlights, player interviews and analysis.",
  },
  {
    icon: faSoccerBall,
    title: "Official Supporters Clubs",
    description:
      "We are proud to have 225 Official Supporters' Clubs in countries all over the world, including England, Italy, USA and Germany.",
  },
  {
    icon: faTicket,
    title: "Tickets & Hospitality",
    description:
      "A Blue Sea Serpents membership allows supporters priority purchasing matchday tickets. Hospitality packages are also availiable, with our complex playing host to a premium conference center.",
  },
  {
    icon: faMapPin,
    title: "Location",
    description:
      "Our stadium, ticket office and merchandise shop are all located in the heart of the city.",
  },
  {
    icon: faHandshake,
    title: "Partners",
    description:
      "We are proud to recognise 18 official club partners this season, as principal, official and women's team associates.",
  },
  {
    icon: faTrophy,
    title: "Trophies",
    description:
      "The Blue Sea Serpents have won it all. 25 league titles, 15 domestic cups and 8 international triumphs since we were founded in 1893.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <Feature
        icon={feature[0].icon}
        title={feature[0].title}
        description={feature[0].description}
      />
      <Feature
        icon={feature[1].icon}
        title={feature[1].title}
        description={feature[1].description}
      />
      <Feature
        icon={feature[2].icon}
        title={feature[2].title}
        description={feature[2].description}
      />
      <Feature
        icon={feature[3].icon}
        title={feature[3].title}
        description={feature[3].description}
      />
      <Feature
        icon={feature[4].icon}
        title={feature[4].title}
        description={feature[4].description}
      />
      <Feature
        icon={feature[5].icon}
        title={feature[5].title}
        description={feature[5].description}
      />
    </section>
  );
};

export default Features;
